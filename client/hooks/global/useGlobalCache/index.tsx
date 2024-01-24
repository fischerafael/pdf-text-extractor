import { useAuthentication } from "../useAuthenticationGlobal";

export const useGlobalCache = () => {
  const { presenters } = useAuthentication();

  return {
    presenters: {},
    controllers: {},
  };
};
