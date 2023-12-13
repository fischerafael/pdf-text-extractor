import { useAuthentication } from "@/client/hooks/global/useAuthenticationGlobal";
import { useGlobalCache } from "@/client/hooks/global/useGlobalCache";
import React from "react";

export const usePageAppSettings = () => {
  const { presenters } = useGlobalCache();
  const { controllers } = useAuthentication();
  return {
    presenters: {
      userName: presenters.userEmail,
      userEmail: presenters.userEmail,
    },
    controllers: {
      handleLogOut: controllers.logOut
    },
  };
};
