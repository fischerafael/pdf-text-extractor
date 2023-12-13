import { useAuthentication } from "@/client/hooks/global/useAuthenticationGlobal";
import { useUser } from "@/client/hooks/global/useUser";
import { useDisclosure } from "@chakra-ui/react";

export const usePageApp = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  // const { controllers: userControllers, presenters: userPresenters } =
  //   useUser();
  // const { controllers: authControllers, presenters: authPresenters } =
  //   useAuthentication();

  const handleLogOut = async () => {};

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
