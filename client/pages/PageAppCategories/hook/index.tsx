import { categoriesGateway } from "@/client/gateways/api/categories";
import { useState } from "react";

export const usePageAppCategories = () => {
  const [state, setState] = useState({ isLoading: false, inputCategory: "" });

  const onChangeInputCategory = (value: string) => {
    setState((prev) => ({ ...prev, inputCategory: value }));
  };

  const createCategory = async () => {
    setState((prev) => ({ ...prev, isLoading: true }));
    try {
      const { id } = await categoriesGateway.create(
        "rafaelsanfischer@gmail.com",
        state.inputCategory
      );
      setState((prev) => ({ ...prev, inputCategory: "" }));
      console.log("[success - id]", id);
    } catch (e: any) {
      console.log("[error - id]", e.message);
    } finally {
      setState((prev) => ({ ...prev, isLoading: false }));
    }
  };

  console.log("[state]", state);

  return {
    presenters: {
      inputCategory: state.inputCategory,
      isLoading: state.isLoading,
    },
    controllers: { onChangeInputCategory, createCategory },
  };
};
