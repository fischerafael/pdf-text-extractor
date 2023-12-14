import { theme } from "@/client/config/theme";
import * as C from "@chakra-ui/react";
import React from "react";

export const CardContainer = ({
  children,
  spacing = "2",
  onClick,
}: {
  children: React.ReactNode;
  spacing?: string;
  onClick?: () => void;
}) => {
  return (
    <C.VStack
      w="full"
      align="flex-start"
      p="8"
      spacing={spacing}
      borderRadius="8"
      border="solid"
      borderWidth="1px"
      borderColor={`gray.200`}
      cursor="pointer"
      bg={"white"}
      transition="0.5s"
      _hover={{ shadow: "md" }}
      onClick={onClick}
    >
      {children}
    </C.VStack>
  );
};
