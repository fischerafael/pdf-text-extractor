import { categoriesGateway } from "@/client/gateways/api/categories";
import { useGetCategories } from "@/client/hooks/general/useGetCategories";
import { useAuthentication } from "@/client/hooks/global/useAuthenticationGlobal";
import { IOption } from "@/client/interfaces";
import { useState } from "react";

type Color =
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
  color: Color;
  experience: number;
}

interface IState {
  isLoading: boolean;
  category: ICategory;
}

export const usePageAppCategories = () => {
  const { presenters } = useAuthentication();
  const userEmail = presenters.email;

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
      category: { ...prev.category, [key]: value },
    }));
  };

  const {
    isLoading: isLoadingCategories,
    optionsCategories: optionsCategories,
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
      setState((prev) => ({
        ...prev,
        category: { ...prev.category, color: "", title: "" },
      }));
      await refetch();
      console.log("[success - id]", id);
    } catch (e: any) {
      console.log("[error - id]", e.message);
    } finally {
      setState((prev) => ({ ...prev, isLoading: false }));
    }
  };

  const removeCategory = async (id: string) => {
    setState((prev) => ({ ...prev, isLoading: true }));
    try {
      const data = await categoriesGateway.remove(id);
      await refetch();
      console.log("[REMOVE DATA]", data);
    } catch (e: any) {
      console.log("[error - id]", e.message);
    } finally {
      setState((prev) => ({ ...prev, isLoading: false }));
    }
  };

  const isEnabled = !!state.category.color && !!state.category.color;
  const isLoading = state.isLoading || isLoadingCategories;

  console.log("[categories]", optionsCategories);

  return {
    presenters: {
      title: state.category.title,
      color: state.category.color,
      isLoading: isLoading,
      optionsCategories: optionsCategories,
      categories,
      optionsColors: optionsColors,
      isEnabled,
    },
    controllers: {
      onChangeInputCategory: onChangeCategoryTitle,
      createCategory: createCategory,
      removeCategory: removeCategory,
    },
  };
};

const colorsAvailable = [
  "",
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

export const optionsColors: IOption[] = colorsAvailable.map((color) => ({
  key: color,
  value: color,
}));

export const formatColorTone = (color: string, tone: number = 200) => {
  return `${color}.${tone}`;
};
