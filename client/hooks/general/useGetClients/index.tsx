import { clientsGateway } from "@/client/gateways/api/clients";
import { useQuery } from "react-query";

export const useGetClients = (email?: string) => {
  const data = useQuery({
    queryKey: ["clients", email],
    queryFn: () => clientsGateway.listByUser(email!),
    enabled: !!email,
  });

  return {
    presenters: data,
  };
};
