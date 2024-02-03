import { theme } from "@/client/config/theme";
import * as C from "@chakra-ui/react";
import React from "react";

export const CardContainer = ({
  children,
  spacing = "2",
  cursor = "pointer",
  onClick,
}: {
  children: React.ReactNode;
  spacing?: string;
  cursor?: string;
  onClick?: () => void;
}) => {
  return (
    <C.VStack
      w="full"
      align="flex-start"
      p="8"
      spacing={spacing}
      borderRadius={theme.border.radius.regular}
      border="solid"
      borderWidth="1px"
      borderColor={theme.border.color}
      cursor={cursor}
      bg={"white"}
      transition="0.5s"
      _hover={{ shadow: "md" }}
      onClick={onClick}
    >
      {children}
    </C.VStack>
  );
};
