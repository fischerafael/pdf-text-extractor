import React from "react";
import * as C from "@chakra-ui/react";
import { Logo } from "../Logo";
import { LinksContainer } from "../LinksContainer";

const currentYear = new Date().getFullYear();

export const Footer = ({ year = currentYear }: { year?: number }) => {
  return (
    <C.VStack w="full" minH="10vh" spacing="0">
      <C.HStack
        h="full"
        align="flex-start"
        p="8"
        w="full"
        justify="space-between"
      >
        <Logo />
        <LinksContainer />
      </C.HStack>
      <C.Text pb="8" fontSize="xs">
        SuperCreator © {year}
      </C.Text>
    </C.VStack>
  );
};
