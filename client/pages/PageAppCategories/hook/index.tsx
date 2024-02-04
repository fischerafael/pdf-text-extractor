import { categoriesGateway } from "@/client/gateways/api/categories";
import { useGetCategories } from "@/client/hooks/general/useGetCategories";
import { useAuthentication } from "@/client/hooks/global/useAuthenticationGlobal";
import { useState } from "react";

const colourOptions = [
  "gray",
  "red",
  "orange",
  "yellow",
  "green",
  "teal",
  "blue",
  "cyan",
  "purple",
  "pink",
];

type CategoryColor =
  | "gray"
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "teal"
  | "blue"
  | "cyan"
  | "purple"
  | "pink"
  | "";

export interface ICategory {
  id: string;
  title: string;
  color: CategoryColor;
  experience: number;
}

// const loggedUser = "rafaelsanfischer@gmail.com";

interface IState {
  isLoading: boolean;
  category: ICategory;
}

export const usePageAppCategories = () => {
  const { presenters } = useAuthentication();
  const userEmail = presenters.email;
  const [stateLegacy, setStateLegacy] = useState({
    isLoading: false,
    inputCategory: "",
    colour: "",
  });

  const onChangeInputCategoryLegacy = (value: string) => {
    setStateLegacy((prev) => ({ ...prev, inputCategory: value }));
  };

  const createCategoryLegacy = async () => {
    setStateLegacy((prev) => ({ ...prev, isLoading: true }));
    try {
      const { id } = await categoriesGateway.create(
        userEmail,
        stateLegacy.inputCategory,
        ""
      );
      setStateLegacy((prev) => ({ ...prev, inputCategory: "" }));
      await refetch();
      console.log("[success - id]", id);
    } catch (e: any) {
      console.log("[error - id]", e.message);
    } finally {
      setStateLegacy((prev) => ({ ...prev, isLoading: false }));
    }
  };

  const [state, setState] = useState<IState>({
    isLoading: false,
    category: {
      id: "",
      title: "",
      color: "",
      experience: 0,
    },
  });

  const onChangeCategoryTitle = (key: "title" | "color", value: string) => {
    setState((prev) => ({
      ...prev,
      category: { ...prev.category, title: value },
    }));
  };

  const {
    isLoading: isLoadingCategories,
    categories,
    refetch,
  } = useGetCategories(userEmail);

  const createCategory = async () => {
    setState((prev) => ({ ...prev, isLoading: true }));
    try {
      const { id } = await categoriesGateway.create(
        userEmail,
        state.category.title,
        state.category.color
      );
      setStateLegacy((prev) => ({ ...prev, inputCategory: "" }));
      await refetch();
      console.log("[success - id]", id);
    } catch (e: any) {
      console.log("[error - id]", e.message);
    } finally {
      setState((prev) => ({ ...prev, isLoading: false }));
    }
  };

  const removeCategory = async (id: string) => {
    setStateLegacy((prev) => ({ ...prev, isLoading: true }));
    try {
      const data = await categoriesGateway.remove(id);
      await refetch();
      console.log("[REMOVE DATA]", data);
    } catch (e: any) {
      console.log("[error - id]", e.message);
    } finally {
      setStateLegacy((prev) => ({ ...prev, isLoading: false }));
    }
  };

  const isLoading = stateLegacy.isLoading || isLoadingCategories;

  return {
    presenters: {
      inputCategory: stateLegacy.inputCategory,
      isLoading: isLoading,
      existingCategoryes: categories,
    },
    controllers: {
      onChangeInputCategory: onChangeInputCategoryLegacy,
      createCategory: createCategoryLegacy,
      removeCategory: removeCategory,
    },
  };
};
