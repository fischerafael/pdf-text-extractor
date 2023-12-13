import React from "react";
import * as C from "@chakra-ui/react";
import { theme } from "@/client/config/theme";

interface ButtonProps extends C.ButtonProps {
  children: React.ReactNode;
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <C.Button
      colorScheme={theme.accentColour}
      bg={theme.mainColour}
      borderRadius="4"
      fontSize="md"
      {...props}
    >
      {children}
    </C.Button>
  );
};
