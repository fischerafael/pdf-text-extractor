import { cookieGateway } from "@/client/gateways/cookie";
import { useEffect } from "react";
import { atom, useRecoilState } from "recoil";

const USER_KEY = "@APP-USER";

export const useUser = () => {
  const [state, setState] = useRecoilState<IUserAtom>(userState);

  const update = (value: IUserAtom) => {
    setState((prev) => ({ ...prev, ...value }));
    cookieGateway.set(value, USER_KEY);
  };

  const reset = () => {
    setState(INITIAL_STATE_TOKEN);
    cookieGateway.destroy(USER_KEY);
  };

  useEffect(() => {
    try {
      const cookie = cookieGateway.get<IUserAtom>(USER_KEY);
      if (!!cookie && !!cookie.email) {
        update(cookie);
      }
    } catch (e: any) {
      console.log("No User Cookie");
    }
  }, []);

  return {
    presenters: {
      state,
    },
    controllers: { reset, update },
  };
};

interface IUserAtom {
  name: string;
  email: string;
  imageSrc: string;
}

const INITIAL_STATE_TOKEN: IUserAtom = {
  name: "",
  email: "",
  imageSrc: "",
};

const userState = atom<IUserAtom>({
  key: "userAtom",
  default: INITIAL_STATE_TOKEN,
});
