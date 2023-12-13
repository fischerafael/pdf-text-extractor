import { pages } from "@/client/config/links";
import { cookieGateway } from "@/client/gateways/cookie";
import { utils } from "@/client/utils";
import { useEffect } from "react";
import { atom, useRecoilState } from "recoil";
import { useGetIsPublicPage as useIsPublic } from "../../general/useGetIsPublicPage";
import { apiGateway } from "@/client/gateways/api";

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
    const { access, refresh } = await apiGateway.post.logIn({
      email: email!,
      password: password!,
    });
    utils.handleNavigateTo(pages.prompts.href);
    updateStateAndCookie({ access: access, refresh: refresh });
  };

  const logOut = async () => {
    try {
      await apiGateway.post.logOut({ refresh: state.refresh });
    } catch (e: any) {
      console.log(e);
    } finally {
      reset();
      utils.handleNavigateTo(pages.landingPage.href);
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
  const isPublic = useIsPublic();
  useEffect(() => {
    (async () => {
      try {
        if (isPublic) return;
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
