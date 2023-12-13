import React from "react";
import * as C from "@chakra-ui/react";
import { theme } from "@/client/config/theme";

export const CardContainer = ({
  children,
  spacing = "2",
}: {
  children: React.ReactNode;
  spacing?: string;
}) => {
  return (
    <C.VStack
      w="full"
      align="flex-start"
      p="8"
      spacing={spacing}
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
