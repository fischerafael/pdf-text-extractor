import { pages } from "@/client/config/links";
import { cookieGateway } from "@/client/gateways/cookie";
import { utils } from "@/client/utils";
import { useEffect } from "react";
import { atom, useRecoilState } from "recoil";

export const useAuthentication = () => {
  const [state, setState] = useRecoilState(tokenState);

  const updateStateAndCookie = (value: { access: string; refresh: string }) => {
    setState((prev) => ({ ...prev, ...value }));
    cookieGateway.set(value);
  };

  const reset = () => {
    setState(INITIAL_STATE_TOKEN);
    cookieGateway.destroy();
  };

  useSyncAuthorizationFromCookies(updateStateAndCookie, reset);

  const logIn = async (email?: string, password?: string) => {
    try {
      // logic
      utils.handleNavigateTo(pages.app.href);
      updateStateAndCookie({ access: "", refresh: "" });
    } catch (e: any) {
      console.log(e);
    } finally {
    }
  };

  const signUp = async () => {
    try {
      // logic
      utils.handleNavigateTo(pages.app.href);
      updateStateAndCookie({ access: "", refresh: "" });
    } catch (e: any) {
      console.log(e);
    } finally {
    }
  };

  const logOut = async () => {
    try {
      reset();
      utils.handleNavigateTo(pages.landingPage.href);
    } catch (e: any) {
      console.log(e);
    } finally {
    }
  };

  return {
    presenters: {
      refresh: state.refresh,
      access: state.access,
    },
    controllers: {
      logIn: logIn,
      logOut: logOut,
      signUp: signUp,
    },
  };
};

interface IAuthAtom {
  access: string;
  refresh: string;
}

const INITIAL_STATE_TOKEN = {
  refresh: "",
  access: "",
};

const tokenState = atom<IAuthAtom>({
  key: "tokenAtom",
  default: INITIAL_STATE_TOKEN,
});

const useSyncAuthorizationFromCookies = (
  updateStateAndCookie: (value: { access: string; refresh: string }) => void,
  reset: () => void
) => {
  useEffect(() => {
    (async () => {
      try {
        if (!updateStateAndCookie || !reset) throw new Error();
        const result: IAuthAtom = cookieGateway.get();
        if (!result) throw new Error("No Cookie");
        updateStateAndCookie(result);
        console.log("Has cookie");
      } catch (e: any) {
        reset();
        utils.handleNavigateTo(pages.landingPage.href);
        console.log("No cookie found");
      }
    })();
  }, []);
};
