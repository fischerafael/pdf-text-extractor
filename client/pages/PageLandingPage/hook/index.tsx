import { signUpWithGoogle } from "@/client/gateways/firebase";
import { useAuthentication } from "@/client/hooks/global/useAuthenticationGlobal";
import { useUser } from "@/client/hooks/global/useUser";

export const usePageLandingPage = () => {
  const { controllers: authControllers } = useAuthentication();
  const { controllers: userControllers } = useUser();

  const handleLogInWithGoogle = async () => {
    try {
      const { displayName, email, photoURL } = await signUpWithGoogle();
      if (!email) throw new Error("Failed to log in. Missing email");
      authControllers.logIn(email, "");
      userControllers.update({
        email: email,
        imageSrc: photoURL!,
        name: displayName!,
      });
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
