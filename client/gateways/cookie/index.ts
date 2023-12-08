import cookie from "js-cookie";

const APP_KEY = "@APP";

const set = <T>(value: T, key: string = APP_KEY) => {
  cookie.set(key, JSON.stringify(value));
};

const get = <T>(key: string = APP_KEY): T => {
  const result = cookie.get(key);
  if (!result) throw new Error("Cookie undefined");
  return JSON.parse(result) as T;
};

const destroy = (key: string = APP_KEY) => {
  cookie.remove(key);
};

export const cookieGateway = {
  set,
  get,
  destroy,
};
