import { pages } from "@/client/config/links";
import { useGetPrompts } from "@/client/hooks/general/useGetPrompts";
import { useAuthentication } from "@/client/hooks/global/useAuthenticationGlobal";
import { useGlobalCache } from "@/client/hooks/global/useGlobalCache";
import { IOption } from "@/client/interfaces";
import { utils } from "@/client/utils";
import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";

interface IState {
  searchInput: string;
  selectedCategories: IOption[];
  selectedAIModels: IOption[];
  selectedDepartments: IOption[];
  selectedAuthors: IOption[];
}

const INITIAL_STATE: IState = {
  searchInput: "",
  selectedCategories: [],
  selectedAIModels: [],
  selectedDepartments: [],
  selectedAuthors: [],
};

export const usePageApp = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { presenters: authPresenters } = useAuthentication();
  const { presenters: globalCachePresenters } = useGlobalCache();
  const { prompts } = useGetPrompts({ access: authPresenters.access });

  const [state, setState] = useState<IState>(INITIAL_STATE);

  const onChangeSearchInput = (value: string) => {
    setState({
      ...state,
      searchInput: value,
    });
  };
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
  const updateAuthors = (options: IOption[]) => {
    setState({
      ...state,
      selectedAuthors: options,
    });
  };
  const handleNavigateToPrompt = (promptId: string) => {
    utils.handleNavigateTo(`${pages.prompt.href}?id=${promptId}`);
  };

  console.log("PAGE STATE ", state);

  return {
    presenters: {
      isOpen,
      categoryOptions: globalCachePresenters.categoryOptions,
      departmentOptions: globalCachePresenters.departmentOptions,
      aiModelOptions: globalCachePresenters.aiModelOptions,
      authorOptions: globalCachePresenters.authorOptions,
      searchInputValue: state.searchInput,
      prompts: prompts,
    },
    controllers: {
      onClose,
      onOpen,
      updateCategories,
      updateAIModels,
      updateDepartments,
      updateAuthors,
      onChangeSearchInput,
      handleNavigateToPrompt,
    },
  };
};
