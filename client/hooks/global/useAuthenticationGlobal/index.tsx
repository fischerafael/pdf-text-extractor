import { cookieGateway } from "@/client/gateways/cookie";
import { signUpWithGoogle } from "@/client/gateways/firebase";
import { useEffect } from "react";
import { atom, useRecoilState } from "recoil";
import { useGetIsPublicPage as useIsPublic } from "../../general/useGetIsPublicPage";
import { usersGateway } from "@/client/gateways/api/users";

interface AuthAtom {
  email: string;
  userId: string;
  name: string;
  avatar: string;
}

export const useAuthentication = () => {
  const [state, setState] = useRecoilState(tokenState);

  const updateStateAndCookie = (value: AuthAtom) => {
    setState((prev) => ({ ...prev, ...value }));
    cookieGateway.set(value);
  };

  const reset = () => {
    setState(INITIAL_STATE_TOKEN);
    cookieGateway.destroy();
  };

  useSyncAuthorizationFromCookies(updateStateAndCookie, reset);

  const logIn = async () => {
    console.log("here");
    const { user: firebaseUser } = await signUpWithGoogle();
    console.log("[firebaseUser]", firebaseUser);
    const { user: apiUser } = await usersGateway.findByEmail(
      firebaseUser.email
    );
    console.log("[apiUser]", apiUser);
    if (!apiUser) {
      console.log("[user does not exist, creating]");
      const { data } = await usersGateway.create(
        firebaseUser.email!,
        firebaseUser.displayName!,
        firebaseUser.photoURL!
      );
      console.log("[user does not exist, id]", data);
      return;
    }
    console.log("[user exist, not creating]");

    // utils.handleNavigateTo(pages.timesheets.href);
    // updateStateAndCookie({ avatar: "", email: "", name: "", userId: "" });
  };

  const logOut = async () => {
    // try {
    //   await apiGateway.post.logOut({ refresh: state.refresh });
    // } catch (e: any) {
    //   console.log(e);
    // } finally {
    //   reset();
    //   utils.handleNavigateTo(pages.landingPage.href);
    // }
  };

  return {
    presenters: {
      user: "",
      email: "",
      userId: "",
      avatar: "",
    },
    controllers: {
      logIn: logIn,
      logOut: logOut,
    },
  };
};

const INITIAL_STATE_TOKEN: AuthAtom = {
  avatar: "",
  email: "",
  name: "",
  userId: "",
};

const tokenState = atom<AuthAtom>({
  key: "tokenAtom",
  default: INITIAL_STATE_TOKEN,
});

const useSyncAuthorizationFromCookies = (
  updateStateAndCookie: (value: AuthAtom) => void,
  reset: () => void
) => {
  const isPublic = useIsPublic();
  useEffect(() => {
    (async () => {
      try {
        if (isPublic) return;
        if (!updateStateAndCookie || !reset) throw new Error();
        const result: AuthAtom = cookieGateway.get();
        if (!result) throw new Error("No Cookie");
        updateStateAndCookie(result);
        console.log("Has cookie");
      } catch (e: any) {
        reset();
        // utils.handleNavigateTo(pages.landingPage.href);
        console.log("No cookie found");
      }
    })();
  }, []);
};
