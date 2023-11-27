import React from "react";
import NextLink from "next/link";

export const Link = ({
  children: children,
  href,
}: {
  href: string;
  children: string;
}) => {
  return <NextLink href={href}>{children}</NextLink>;
};
