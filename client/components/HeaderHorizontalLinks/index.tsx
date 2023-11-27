import React from "react";
import * as C from "@chakra-ui/react";
import { Link } from "../Link";

export const HeaderHorizontalLinks = () => {
  return (
    <C.HStack gap="8">
      <Link href="/about">About</Link>
      <Link href="/pricing">Pricing</Link>
      <Link href="/blog">Blog</Link>
    </C.HStack>
  );
};
