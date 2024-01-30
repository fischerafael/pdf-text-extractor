import { tasksGateway } from "@/client/gateways/api/tasks";
import { useGetClients } from "@/client/hooks/general/useGetClients";
import { useAuthentication } from "@/client/hooks/global/useAuthenticationGlobal";
import { useState } from "react";
import { useQuery } from "react-query";

export const usePageAppReports = () => {
  const { presenters } = useAuthentication();
  const { presenters: presentersClients } = useGetClients(presenters.email);
  const [state, setState] = useState<{ selectedClient: string }>({
    selectedClient: "",
  });

  const onSelectClient = (id: string) => {
    setState((prev) => ({ ...prev, selectedClient: id }));
  };

  const { data } = useQuery({
    queryKey: ["reports", presenters.email],
    queryFn: () => tasksGateway.getLasWeekTasks(presenters.email),
    enabled: !!presenters.email,
  });

  const stats = {
    totalTasks: data?.reduce((acc, current) => acc + current.count, 0),
    time: data?.reduce(
      (acc, current) =>
        acc +
        current.data?.reduce(
          (acc, curr) => Number(curr?.details?.duration) + acc,
          0
        ),
      0
    ),
  };

  const selectedClientData = presentersClients.data?.data.find(
    (client) => client.details.name === state.selectedClient
  );

  const onDeselectClient = () => {
    setState({ selectedClient: "" });
  };

  const handleDownloadReport = async () => {};

  return {
    controllers: { onSelectClient, onDeselectClient },
    presenters: {
      tasks: data,
      stats,
      clientOptions: [
        { key: "", value: "" },
        ...presentersClients.clientsOptions,
      ],
      selectedClient: state.selectedClient,
      selectedClientData: selectedClientData,
    },
  };
};
