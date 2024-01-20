import { categoriesGateway } from "@/client/gateways/api/categories";
import axios from "axios";
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
    controllers: { onChangeInputCategory, createCategory: createCategory },
  };
};

const createCategoryMock = async () => {
  try {
    console.log("[CALIING...]");
    await axios.post(
      `http://localhost:3000/api/entities`,
      {
        user: "test@gmail.com",
        app: "test.app",
        details: {
          random: "data",
        },
      },
      {
        headers: {
          api_key: process.env.NEXT_PUBLIC_ENTITIES_API_KEY,
        },
      }
    );
  } catch (e: any) {
    console.log(e);
  }
};
