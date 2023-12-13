import { useGetUser } from "../../general/useGetUser";
import { useAuthentication } from "../useAuthenticationGlobal";

export const useGlobalCache = () => {
  const { presenters } = useAuthentication();
  const { email, fullName } = useGetUser({ access: presenters.access });

  return {
    presenters: {
      userEmail: email,
      userFullName: fullName,
    },
    controllers: {},
  };
};
