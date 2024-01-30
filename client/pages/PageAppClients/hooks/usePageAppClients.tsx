import { pages } from "@/client/config/links";
import {
  IClientAPIData,
  INITIAL_DATA_CLIENT_API,
  clientsGateway,
} from "@/client/gateways/api/clients";
import { useGetClients } from "@/client/hooks/general/useGetClients";
import { useAuthentication } from "@/client/hooks/global/useAuthenticationGlobal";
import { utils } from "@/client/utils";
import { useState } from "react";
import { useQuery, useQueryClient } from "react-query";

export interface IClientContact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}

export interface IClient {
  id: string;
  name: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
  phoneNumber: string;
  avatar?: string;
  contacts: IClientContact[];
}

export const usePageAppClients = () => {
  const { presenters } = useAuthentication();
  const [isLoading, setLoading] = useState(false);
  const queryClient = useQueryClient();

  const { presenters: presentersClients } = useGetClients(presenters.email);

  const handleRemoveFromCache = (id: string) => {
    queryClient.setQueryData(
      ["clients", presenters.email],
      (existing?: IClientAPIData) => {
        if (!existing) return INITIAL_DATA_CLIENT_API;
        return {
          ...existing,
          data: existing.data.filter((client) => client.id !== id) || [],
        };
      }
    );
  };

  const handleDelete = async (id: string) => {
    setLoading(true);
    try {
      await clientsGateway.remove(id);
      handleRemoveFromCache(id);
    } catch (e: any) {
      console.log("[error]", e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleNavigateToAdd = () =>
    utils.handleNavigateTo(`${pages.clients.href}/client`);

  return {
    presenters: {
      clients: presentersClients.data?.data || [],
      count: presentersClients.data?.count || 0,
      isLoading,
    },
    controllers: { handleDelete, handleNavigateToAdd },
  };
};
