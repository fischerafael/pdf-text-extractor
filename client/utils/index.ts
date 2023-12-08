import Router from "next/router";

export const utils = {
  handleNavigateTo: (url: string) => {
    Router.push(url);
  },
};
