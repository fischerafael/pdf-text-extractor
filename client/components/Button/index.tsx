import React from "react";
import * as C from "@chakra-ui/react";
import { theme } from "@/client/config/theme";

interface ButtonProps extends C.ButtonProps {
  children: React.ReactNode;
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <C.Button
      colorScheme={theme.color.primary}
      bgGradient={`linear(to-r, ${theme.color.secondary}, ${theme.color.primary})`}
      borderRadius={theme.border.radius.regular}
      fontSize="md"
      fontFamily={theme.font.family}
      fontWeight="semi-bold"
      {...props}
    >
      {children}
    </C.Button>
  );
};
