import { useAuthentication } from "@/client/hooks/global/useAuthenticationGlobal";
import { useUser } from "@/client/hooks/global/useUser";
import { useDisclosure } from "@chakra-ui/react";

export const usePageApp = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { controllers: authControllers, presenters: authPresenters } =
    useAuthentication();
  const { controllers: userControllers, presenters: userPresenters } =
    useUser();

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
      imageSource: "",
      userName: "",
      userEmail: "",
    },
    controllers: { onClose, onOpen, handleLogOut },
  };
};
