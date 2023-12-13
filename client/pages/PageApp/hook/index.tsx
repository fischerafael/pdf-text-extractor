import { useAuthentication } from "@/client/hooks/global/useAuthenticationGlobal";
import { useGlobalCache } from "@/client/hooks/global/useGlobalCache";
import { useDisclosure } from "@chakra-ui/react";

export const usePageApp = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { controllers: authControllers, presenters: authPresenters } =
    useAuthentication();
  const {
    controllers: globalCacheControllers,
    presenters: globalCachePresenters,
  } = useGlobalCache();

  const handleLogOut = async () => {
    try {
      await authControllers.logOut();
    } catch (e: any) {
      console.log(e.message);
    }
  };

  return {
    presenters: {
      isOpen,
      userName: globalCachePresenters.userFullName,
      userEmail: globalCachePresenters.userEmail,
    },
    controllers: { onClose, onOpen, handleLogOut },
  };
};
