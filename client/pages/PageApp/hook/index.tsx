import { tasksGateway } from "@/client/gateways/api/tasks";
import { useGetCategories } from "@/client/hooks/general/useGetCategories";
import { utils } from "@/client/utils";
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

  const [inputState, setInputState] = useState<IState>(INITIAL_STATE);
  const [stateUi, setStateUi] = useState({ currentDate: new Date() });

  const onChangeStateString = (key: keyof IState, value: string) => {
    setInputState((prev) => ({ ...prev, [key]: value }));
  };

  const onAddDate = () => {
    const currentDate = stateUi.currentDate;
    currentDate.setDate(currentDate.getDate() + 1);
    setStateUi((prev) => ({ ...prev, currentDate }));
  };

  const onSubDate = () => {
    const currentDate = stateUi.currentDate;
    currentDate.setDate(currentDate.getDate() - 1);
    setStateUi((prev) => ({ ...prev, currentDate }));
  };

  console.log("[current date]", stateUi);

  const onSubmit = async () => {
    setLoading(true);
    try {
      await tasksGateway.create(
        loggedUser,
        inputState.task,
        inputState.duration,
        inputState.category,
        dateAPI
      );
      setInputState(INITIAL_STATE);
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

  const dateAPI = utils.formatDate(stateUi.currentDate);

  const {
    data: tasks,
    isLoading: isLoadingTasks,
    refetch,
  } = useQuery(
    ["/tasks", loggedUser, dateAPI],
    async () => await tasksGateway.listByUserByDate(loggedUser, dateAPI),
    {
      enabled: !!loggedUser && !!dateAPI,
    }
  );

  const isEnabled =
    !!inputState.category && !!inputState.duration && !!inputState.task;

  const totalTime = tasks?.data.reduce((total, currentTask) => {
    const currentTaskDuration = parseFloat(currentTask.details.duration);
    return total + currentTaskDuration;
  }, 0);

  return {
    controllers: {
      onChangeState: onChangeStateString,
      onSubmit,
      onRemove,
      onAddDate,
      onSubDate,
    },
    presenters: {
      optionsCategories: [{ key: "", value: "" }, ...categories],
      task: inputState.task,
      duration: inputState.duration,
      category: inputState.category,
      isLoading: isLoading || isLoadingTasks,
      isDisabled: !isEnabled,
      tasks: tasks,
      date: utils.formatDate(stateUi.currentDate, "/"),
      totalTime: totalTime,
    },
  };
};
