import React from "react";
import * as C from "@chakra-ui/react";
import { Logo } from "../Logo";

export const Footer = () => {
  return (
    <C.HStack px="8" w="full" h="10vh">
      <Logo />
    </C.HStack>
  );
};
