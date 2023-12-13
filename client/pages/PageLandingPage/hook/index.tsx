import { pages } from "@/client/config/links";
import { utils } from "@/client/utils";

export const usePageLandingPage = () => {
  const handleSignIn = () => {
    utils.handleNavigateTo(pages.signIn.href);
  };

  return {
    providers: {},
    controllers: {
      handleLogIn: handleSignIn,
    },
  };
};
