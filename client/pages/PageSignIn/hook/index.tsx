import { pages } from "@/client/config/links";
import { utils } from "@/client/utils";
import { useState } from "react";

interface ILogIn {
  email: string;
  password: string;
}

export const usePageSignIn = () => {
  const [state, setState] = useState<ILogIn>({ email: "", password: "" });

  const handleLogIn = async (e: any) => {
    try {
      alert("Login");
    } catch (e: any) {
      console.log(e.message);
    }
  };

  const handleBackToHome = () => {
    utils.handleNavigateTo(pages.landingPage.href);
  };

  const handleUpdateState = (key: keyof ILogIn, value: string) => {
    setState((prev) => ({ ...prev, [key]: value }));
  };

  console.log("state", state);

  return {
    controllers: {
      handleBackToHome,
      handleLogIn: handleLogIn,
      handleUpdateState: handleUpdateState,
    },
    presenters: {
      email: state.email,
      password: state.password,
    },
  };
};
