import {
  IClientAPIData,
  INITIAL_DATA_CLIENT_API,
  clientsGateway,
} from "@/client/gateways/api/clients";
import { IOption } from "@/client/interfaces";
import { useQuery, useQueryClient } from "react-query";

export const useGetClients = (email?: string) => {
  const queryClient = useQueryClient();

  const data = useQuery({
    queryKey: ["clients", email],
    queryFn: () => clientsGateway.listByUser(email!),
    enabled: !!email,
  });

  const removeFromHttpCache = (id: string) => {
    queryClient.setQueryData(
      ["clients", email],
      (existing?: IClientAPIData) => {
        if (!existing) return INITIAL_DATA_CLIENT_API;
        return {
          ...existing,
          data: existing.data.filter((client) => client.id !== id) || [],
        };
      }
    );
  };

  const clientsOptions: IOption[] =
    data.data?.data.map((client) => ({
      key: client.id,
      value: client.details.name,
    })) || [];

  return {
    presenters: {
      ...data,
      clientsOptions: clientsOptions,
    },
    controllers: {
      removeFromHttpCache,
    },
  };
};
