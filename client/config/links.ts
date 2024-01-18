import { IconType } from "react-icons";
import * as Icon from "react-icons/hi";

export interface ILink {
  name: string;
  isPublic: boolean;
  isPrivate: boolean;
  label: string;
  href: string;
  icon: IconType;
}

export const pages = {
  landingPage: {
    isPublic: false,
    isPrivate: false,
    label: "Home",
    href: "/",
    icon: Icon.HiOutlineHome,
  },
  timesheets: {
    isPublic: false,
    isPrivate: false,
    label: "App",
    href: "/app/timesheets",
    icon: Icon.HiOutlineTable,
  },
};

export const links: ILink[] = Object.entries(pages).map(
  ([key, value]): {
    name: string;
    isPrivate: boolean;
    isPublic: boolean;
    label: string;
    href: string;
    icon: IconType;
  } => {
    return {
      name: key,
      isPublic: value.isPublic,
      isPrivate: value.isPrivate,
      label: value.label,
      href: value.href,
      icon: value.icon,
    };
  }
);
