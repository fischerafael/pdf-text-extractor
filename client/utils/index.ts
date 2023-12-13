import Router from "next/router";
import { ILink } from "../config/links";

export const utils = {
  handleNavigateTo: (url: string) => {
    Router.push(url);
  },
  filterPublicLinks: (links: ILink[]): ILink[] =>
    links.filter((link) => link.isPublic),
  isEmailValid: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },
  isPasswordValid: (password: string): boolean => {
    return password.length >= 8;
  },
};
