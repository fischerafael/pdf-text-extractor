import { formatDate, tasksGateway } from "@/client/gateways/api/tasks";
import { useGetCategories } from "@/client/hooks/general/useGetCategories";
import { IOption } from "@/client/interfaces";
import { useState } from "react";
import { useQuery } from "react-query";

const loggedUser = "rafaelsanfischer@gmail.com";

interface IState {
  task: string;
  duration: string;
  category: string;
}

const INITIAL_STATE: IState = { task: "", duration: "", category: "" };

export const usePageApp = () => {
  const { categories } = useGetCategories(loggedUser);

  const [isLoading, setLoading] = useState(false);

  const [state, setState] = useState<IState>(INITIAL_STATE);

  const onChangeStateString = (key: keyof IState, value: string) => {
    setState((prev) => ({ ...prev, [key]: value }));
  };

  const onSubmit = async () => {
    setLoading(true);
    try {
      await tasksGateway.create(
        loggedUser,
        state.task,
        state.duration,
        state.category
      );
      setState(INITIAL_STATE);
      await refetch();
    } catch (e: any) {
    } finally {
      setLoading(false);
    }
  };

  const onRemove = async (id: string) => {
    try {
      setLoading(true);
      await tasksGateway.remove(id);
      await refetch();
    } catch (e: any) {
    } finally {
      setLoading(false);
    }
  };

  const date = formatDate(new Date());

  const {
    data: tasks,
    isLoading: isLoadingTasks,
    refetch,
  } = useQuery(
    ["/tasks", loggedUser],
    async () => await tasksGateway.listByUserByDate(loggedUser, date),
    {
      enabled: !!loggedUser && !!date,
    }
  );

  const isEnabled = !!state.category && !!state.duration && !!state.task;

  return {
    controllers: { onChangeState: onChangeStateString, onSubmit, onRemove },
    presenters: {
      optionsCategories: [{ key: "", value: "" }, ...categories],
      task: state.task,
      duration: state.duration,
      category: state.category,
      isLoading: isLoading || isLoadingTasks,
      isDisabled: !isEnabled,
      tasks: tasks,
      date: date,
    },
  };
};
