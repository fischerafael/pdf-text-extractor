import { useAuthentication } from "@/client/hooks/global/useAuthenticationGlobal";
import { useUser } from "@/client/hooks/global/useUser";

export const usePageLandingPage = () => {
  const { controllers: authControllers } = useAuthentication();
  const { controllers: userControllers } = useUser();

  const handleLogInWithGoogle = async () => {
    try {
      // authControllers.signUpOrSignIn(email, "");
      // userControllers.update({
      //   email: email,
      //   imageSrc: photoURL!,
      //   name: displayName!,
      // });
    } catch (e: any) {
      console.log(e.message);
    }
  };

  return {
    providers: {},
    controllers: {
      handleLogIn: handleLogInWithGoogle,
    },
  };
};

// testing something
