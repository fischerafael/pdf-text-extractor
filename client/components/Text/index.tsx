import React from "react";
import * as C from "@chakra-ui/react";
import { theme } from "@/client/config/theme";

interface TextProps extends C.TextProps {
  children: React.ReactNode;
  variant?: "h1" | "h2" | "h3" | "p";
}

export const Text = ({ children, variant = "p", ...props }: TextProps) => {
  if (variant === "h1")
    return (
      <C.Text
        color={theme.mainColour}
        fontSize="3xl"
        fontWeight="medium"
        {...props}
      >
        {children}
      </C.Text>
    );
  if (variant === "h2")
    return (
      <C.Text
        color={theme.mainColour}
        fontSize="xl"
        fontWeight="medium"
        {...props}
      >
        {children}
      </C.Text>
    );
  if (variant === "h3")
    return (
      <C.Text
        color={theme.mainColour}
        fontSize="lg"
        fontWeight="medium"
        {...props}
      >
        {children}
      </C.Text>
    );
  return (
    <C.Text color={theme.mainColour} {...props}>
      {children}
    </C.Text>
  );
};
