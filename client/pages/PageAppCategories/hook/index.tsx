import { categoriesGateway } from "@/client/gateways/api/categories";
import { useGetCategories } from "@/client/hooks/general/useGetCategories";
import { useAuthentication } from "@/client/hooks/global/useAuthenticationGlobal";
import { useState } from "react";

// const loggedUser = "rafaelsanfischer@gmail.com";

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

export const usePageAppCategories = () => {
  const { presenters } = useAuthentication();
  const loggedUser = presenters.email;
  const [state, setState] = useState({
    isLoading: false,
    inputCategory: "",
    colour: "",
  });

  const onChangeInputCategory = (value: string) => {
    setState((prev) => ({ ...prev, inputCategory: value }));
  };

  const createCategory = async () => {
    setState((prev) => ({ ...prev, isLoading: true }));
    try {
      const { id } = await categoriesGateway.create(
        loggedUser,
        state.inputCategory
      );
      setState((prev) => ({ ...prev, inputCategory: "" }));
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

  const {
    isLoading: isLoadingCategories,
    categories,
    refetch,
  } = useGetCategories(loggedUser);

  const isLoading = state.isLoading || isLoadingCategories;

  return {
    presenters: {
      inputCategory: state.inputCategory,
      isLoading: isLoading,
      existingCategoryes: categories,
    },
    controllers: {
      onChangeInputCategory,
      createCategory: createCategory,
      removeCategory: removeCategory,
    },
  };
};
