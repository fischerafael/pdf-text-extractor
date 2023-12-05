import { IconType } from "react-icons";
import * as Icon from "react-icons/hi";

export interface ILink {
  isPublic: boolean;
  isPrivate: boolean;
  label: string;
  href: string;
  icon: IconType;
}

export const links = {
  pages: [
    {
      isPublic: true,
      isPrivate: true,
      label: "Home",
      href: "/",
      icon: Icon.HiOutlineHome,
    },
    {
      isPublic: true,
      isPrivate: true,
      label: "App",
      href: "/app",
      icon: Icon.HiOutlineHome,
    },
    {
      isPublic: true,
      isPrivate: true,
      label: "Pricing",
      href: "/pricing",
      icon: Icon.HiOutlineCash,
    },
    {
      isPublic: true,
      isPrivate: true,
      label: "Pricing",
      href: "/pricing",
      icon: Icon.HiOutlineCash,
    },
    {
      isPublic: true,
      isPrivate: true,
      label: "Pricing",
      href: "/pricing",
      icon: Icon.HiOutlineCash,
    },
  ],
};
