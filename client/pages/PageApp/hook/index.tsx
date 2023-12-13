import { useAuthentication } from "@/client/hooks/global/useAuthenticationGlobal";
import { useGlobalCache } from "@/client/hooks/global/useGlobalCache";
import { IOption } from "@/client/interfaces";
import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";

export const usePageApp = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { controllers: authControllers, presenters: authPresenters } =
    useAuthentication();
  const {
    controllers: globalCacheControllers,
    presenters: globalCachePresenters,
  } = useGlobalCache();
  const [state, setState] = useState<{
    selectedCategories: IOption[];
    selectedAIModels: IOption[];
    selectedDepartments: IOption[];
  }>({
    selectedCategories: [],
    selectedAIModels: [],
    selectedDepartments: [],
  });

  const updateCategories = (options: IOption[]) => {
    setState({
      ...state,
      selectedCategories: options,
    });
  };
  const updateAIModels = (options: IOption[]) => {
    setState({
      ...state,
      selectedAIModels: options,
    });
  };
  const updateDepartments = (options: IOption[]) => {
    setState({
      ...state,
      selectedDepartments: options,
    });
  };

  console.log("PAGE STATE ", state);

  const handleLogOut = async () => {
    try {
      await authControllers.logOut();
    } catch (e: any) {
      console.log(e.message);
    }
  };

  return {
    presenters: {
      isOpen,
      userName: globalCachePresenters.userFullName,
      userEmail: globalCachePresenters.userEmail,
      categoryOptions: globalCachePresenters.categoryOptions,
      departmentOptions: globalCachePresenters.departmentOptions,
      aiModelOptions: globalCachePresenters.aiModelOptions,
    },
    controllers: {
      onClose,
      onOpen,
      handleLogOut,
      updateCategories,
      updateAIModels,
      updateDepartments,
    },
  };
};
