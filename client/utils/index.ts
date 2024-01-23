import Router from "next/router";
import { ILink } from "../config/links";
import { format } from "date-fns";

export const formatDate = (
  date: Date = new Date(),
  separator: string = "-"
) => {
  return format(date, `dd${separator}MM${separator}yyyy`);
};

export const utils = {
  handleNavigateTo: (url: string) => {
    Router.push(url);
  },
  filterPublicLinks: (links: ILink[]): ILink[] =>
    links.filter((link) => !!link.isPublic && !link.isPrivate),
  filterPrivateLinks: (links: ILink[]): ILink[] =>
    links.filter((link) => !link.isPublic && !!link.isPrivate),
  isEmailValid: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },
  isPasswordValid: (password: string): boolean => {
    return password.length >= 8;
  },
  formatDate,
};
