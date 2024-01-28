import { tasksGateway } from "@/client/gateways/api/tasks";
import { useAuthentication } from "@/client/hooks/global/useAuthenticationGlobal";
import { useQuery } from "react-query";

export const usePageAppReports = () => {
  const { presenters } = useAuthentication();

  const { data } = useQuery({
    queryKey: ["reports", presenters.email],
    queryFn: () => tasksGateway.getLasWeekTasks(presenters.email),
    enabled: !!presenters.email,
  });

  // const getLastWeekData = async () => {
  //   try {
  //     const data = await tasksGateway.getLasWeekTasks(presenters.email);
  //   } catch (e: any) {}
  // };

  console.log("[queries]", data);

  return {
    controllers: {},
    presenters: {
      tasks: data,
    },
  };
};
