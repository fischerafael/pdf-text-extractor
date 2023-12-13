import Router from "next/router";
import { ILink } from "../config/links";

export const utils = {
  handleNavigateTo: (url: string) => {
    Router.push(url);
  },
  filterPublicLinks: (links: ILink[]): ILink[] =>
    links.filter((link) => link.isPublic),
};
