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
    isPublic: true,
    isPrivate: true,
    label: "Home",
    href: "/",
    icon: Icon.HiOutlineHome,
  },
  app: {
    isPublic: false,
    isPrivate: true,
    label: "App",
    href: "/app",
    icon: Icon.HiOutlineHome,
  },
  settings: {
    isPublic: false,
    isPrivate: true,
    label: "Settings",
    href: "/app/settings",
    icon: Icon.HiOutlineCog,
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
