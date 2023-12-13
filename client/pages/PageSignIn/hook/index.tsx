import { pages } from "@/client/config/links";
import { apiGateway } from "@/client/gateways/api";
import { utils } from "@/client/utils";
import { useState } from "react";

interface ILogIn {
  email: string;
  password: string;
}

export const usePageSignIn = () => {
  const [state, setState] = useState<ILogIn>({ email: "", password: "" });
  const [isLoading, setLoading] = useState(false);

  const handleLogIn = async (e: any) => {
    try {
      setLoading(true);
      e.preventDefault();
      const { access, refresh } = await apiGateway.post.logIn({
        email: state.email,
        password: state.password,
      });
      console.log(access, refresh);
    } catch (e: any) {
      console.log(e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleBackToHome = () => {
    utils.handleNavigateTo(pages.landingPage.href);
  };

  const handleUpdateState = (key: keyof ILogIn, value: string) => {
    setState((prev) => ({ ...prev, [key]: value }));
  };

  const isSubmitValid =
    utils.isEmailValid(state.email) && utils.isPasswordValid(state.password);

  return {
    controllers: {
      handleBackToHome,
      handleLogIn: handleLogIn,
      handleUpdateState: handleUpdateState,
    },
    presenters: {
      email: state.email,
      password: state.password,
      isDisabled: !isSubmitValid,
      isLoading: isLoading,
    },
  };
};
