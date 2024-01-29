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

export const usePageAppClientsClient = () => {
  const [state, setState] = useState<IState>({
    client: { name: "", avatar: "" },
    address: { address: "", city: "", country: "", postalCode: "" },
    contactMain: { firstName: "", lastName: "", email: "", role: "" },
  });

  console.log("[state]", state);

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

  console.log("[isvalid]", isValid);

  return {
    presenters: { ...state, isValid },
    controllers: { onChangeClient, onChangeAddress, onChangeContactMain },
  };
};
