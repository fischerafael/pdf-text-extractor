import { tasksGateway } from "@/client/gateways/api/tasks";
import { useAuthentication } from "@/client/hooks/global/useAuthenticationGlobal";

export const usePageAppReports = () => {
  const { presenters } = useAuthentication();

  const getLastWeekData = async () => {
    try {
      const data = await tasksGateway.getLasWeekTasks(presenters.email);
    } catch (e: any) {}
  };

  return { controllers: { getLastWeekData }, presenters: {} };
};
