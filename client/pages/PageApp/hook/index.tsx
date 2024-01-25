import { pages } from "@/client/config/links";
import { tasksGateway } from "@/client/gateways/api/tasks";
import { useGetCategories } from "@/client/hooks/general/useGetCategories";
import { useToasts } from "@/client/hooks/general/useToasts";
import { useAuthentication } from "@/client/hooks/global/useAuthenticationGlobal";
import { utils } from "@/client/utils";
import { useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useQuery } from "react-query";

interface IState {
  task: string;
  duration: string;
  category: string;
}

const INITIAL_STATE: IState = { task: "", duration: "", category: "" };

export const usePageApp = () => {
  const { presenters } = useAuthentication();
  const toast = useToasts();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { query } = useRouter();

  const loggedUser = presenters.email;
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
      toast.display("success", "Success", "Task added!");
      await refetch();
    } catch (e: any) {
      toast.display("info", "Something went wrong creating the task");
    } finally {
      setLoading(false);
    }
  };

  const onRemove = async (id: string) => {
    console.log("[innput state][taskid][remove]", id);
    try {
      setLoading(true);
      await tasksGateway.remove(id);
      await refetch();
      toast.display("info", "Success", "Removed");
    } catch (e: any) {
      toast.display("info", "Something went wrong removing the task");
    } finally {
      setLoading(false);
    }
  };

  const onEditTask = async () => {
    setLoading(true);
    try {
      const taskId = query.id as string;
      console.log("[innput state][taskid][from function]", taskId);
      await tasksGateway.update(taskId, {
        category: inputState.category,
        duration: inputState.duration,
        task: inputState.task,
      });
      await refetch();
      toast.display("info", "Success", "Task updated!");
      onCloseEdit();
    } catch (e: any) {
      toast.display("info", "Something went wrong editing the task");
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

  const onOpenEdit = (
    id: string,
    description: string,
    duration: string,
    category: string
  ) => {
    setInputState({
      category,
      duration,
      task: description,
    });
    utils.handleNavigateTo(`${pages.timesheets.href}?id=${id}`);
    onOpen();
  };

  const onCloseEdit = () => {
    setInputState(INITIAL_STATE);
    utils.handleNavigateTo(pages.timesheets.href);
    onClose();
  };

  return {
    controllers: {
      onChangeState: onChangeStateString,
      onSubmit,
      onRemove,
      onAddDate,
      onSubDate,
      onEditTask,
      onOpenEdit: onOpenEdit,
      onCloseEdit: onCloseEdit,
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
      isOpenEditModal: isOpen,
    },
  };
};
