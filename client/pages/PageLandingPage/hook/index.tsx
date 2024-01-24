import { useAuthentication } from "@/client/hooks/global/useAuthenticationGlobal";

export const usePageLandingPage = () => {
  const { controllers } = useAuthentication();

  const handleSignIn = async () => {
    await controllers.logIn();
  };

  return {
    providers: {},
    controllers: {
      handleLogIn: handleSignIn,
    },
  };
};
