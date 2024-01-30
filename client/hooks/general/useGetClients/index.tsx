import {
  IClientAPIData,
  INITIAL_DATA_CLIENT_API,
  clientsGateway,
} from "@/client/gateways/api/clients";
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

  return {
    presenters: data,
    controllers: {
      removeFromHttpCache,
    },
  };
};
