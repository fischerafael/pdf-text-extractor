import React from "react";
import * as C from "@chakra-ui/react";
import { Logo } from "../Logo";
import { LinksContainer } from "../LinksContainer";
import { theme } from "@/client/config/theme";
import { appConfig } from "@/client/config/app";

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
      <C.Text fontFamily={theme.font.family} pb="8" fontSize="xs">
        {appConfig.name} © {year}
      </C.Text>
    </C.VStack>
  );
};
