import { pages } from "@/client/config/links";
import { clientsGateway } from "@/client/gateways/api/clients";
import { useAuthentication } from "@/client/hooks/global/useAuthenticationGlobal";
import { utils } from "@/client/utils";
import { useState } from "react";

interface IStateClient {
  name: string;
  avatar: string;
}
interface IStateAddress {
  address: string;
  city: string;
  country: string;
  postalCode: string;
}
interface IStateContactMain {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}

interface IState {
  client: IStateClient;
  address: IStateAddress;
  contactMain: IStateContactMain;
}

export interface ICreateClient
  extends IStateClient,
    IStateAddress,
    IStateContactMain {}

export const usePageAppClientsClient = () => {
  const { presenters } = useAuthentication();
  const [isLoading, setLoading] = useState(false);
  const [state, setState] = useState<IState>({
    client: { name: "", avatar: "" },
    address: { address: "", city: "", country: "", postalCode: "" },
    contactMain: { firstName: "", lastName: "", email: "", role: "" },
  });

  const onChangeClient = (field: keyof IStateClient) => {
    return (e: any) =>
      setState((prev) => ({
        ...prev,
        client: { ...prev.client, [field]: e.target.value },
      }));
  };
  const onChangeAddress = (field: keyof IStateAddress) => {
    return (e: any) =>
      setState((prev) => ({
        ...prev,
        address: { ...prev.address, [field]: e.target.value },
      }));
  };
  const onChangeContactMain = (field: keyof IStateContactMain) => {
    return (e: any) =>
      setState((prev) => ({
        ...prev,
        contactMain: { ...prev.contactMain, [field]: e.target.value },
      }));
  };

  const isValidClient = !!state.client.name;
  const isValidAddress = Object.entries(state.address).every(
    ([key, value]) => !!value
  );
  const isValidContactMain = Object.entries(state.contactMain).every(
    ([key, value]) => !!value
  );
  const isValid = isValidClient && isValidAddress && isValidContactMain;

  const handleCreateClient = async () => {
    setLoading(true);
    try {
      const { id } = await clientsGateway.create(presenters.email, {
        ...state.client,
        ...state.address,
        ...state.contactMain,
      });
      utils.handleNavigateTo(pages.clients.href);
    } catch (e: any) {
      console.log("[error creating client]", e.value);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    utils.handleNavigateTo(pages.clients.href);
  };

  return {
    presenters: { ...state, isValid, isLoading },
    controllers: {
      onChangeClient,
      onChangeAddress,
      onChangeContactMain,
      handleCreateClient,
      handleCancel,
    },
  };
};
