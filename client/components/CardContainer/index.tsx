import React from "react";
import * as C from "@chakra-ui/react";
import { theme } from "@/client/config/theme";

export const CardContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <C.VStack
      w="full"
      align="flex-start"
      p="8"
      borderRadius="16"
      border="solid"
      borderWidth="1px"
      borderColor={`${theme.accentColour}.200`}
      cursor="pointer"
      bg={`${theme.accentColour}.50`}
      transition="0.5s"
      _hover={{ bg: `${theme.accentColour}.100` }}
    >
      {children}
    </C.VStack>
  );
};
