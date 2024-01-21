import { categoriesGateway } from "@/client/gateways/api/categories";
import { useState } from "react";
import { useQuery } from "react-query";

const loggedUser = "rafaelsanfischer@gmail.com";

export const usePageAppCategories = () => {
  const [state, setState] = useState({ isLoading: false, inputCategory: "" });

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
      await refetchCategories();
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
      await refetchCategories();
      console.log("[REMOVE DATA]", data);
    } catch (e: any) {
      console.log("[error - id]", e.message);
    } finally {
      setState((prev) => ({ ...prev, isLoading: false }));
    }
  };

  const {
    data: categories,
    isLoading: isLoadingCategories,
    refetch: refetchCategories,
  } = useQuery(
    ["/list"],
    async () => {
      return await categoriesGateway.listByUser(loggedUser);
    },
    {
      enabled: !!loggedUser,
    }
  );

  console.log("[data]", categories);

  const existingCategoryes =
    categories?.data.map((cat) => ({
      id: cat.id,
      title: cat.details.title,
    })) || [];

  const isLoading = state.isLoading || isLoadingCategories;

  return {
    presenters: {
      inputCategory: state.inputCategory,
      isLoading: isLoading,
      existingCategoryes: existingCategoryes,
    },
    controllers: {
      onChangeInputCategory,
      createCategory: createCategory,
      removeCategory: removeCategory,
    },
  };
};
