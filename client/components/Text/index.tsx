import React from "react";
import * as C from "@chakra-ui/react";
import { theme } from "@/client/config/theme";

interface TextProps extends C.TextProps {
  children: React.ReactNode;
  variant?: "h1" | "h2" | "h3" | "p" | "xs";
}

export const Text = ({ children, variant = "p", ...props }: TextProps) => {
  if (variant === "h1")
    return (
      <C.Text
        color={theme.color.primary}
        fontSize="2xl"
        fontWeight="medium"
        fontFamily={theme.font.family}
        {...props}
      >
        {children}
      </C.Text>
    );
  if (variant === "h2")
    return (
      <C.Text
        color={theme.color.primary}
        fontSize="xl"
        fontWeight="medium"
        fontFamily={theme.font.family}
        {...props}
      >
        {children}
      </C.Text>
    );
  if (variant === "h3")
    return (
      <C.Text
        color={theme.color.primary}
        fontSize="lg"
        fontWeight="medium"
        fontFamily={theme.font.family}
        {...props}
      >
        {children}
      </C.Text>
    );
  if (variant === "xs")
    return (
      <C.Text
        color={theme.color.primary}
        fontSize="xs"
        fontFamily={theme.font.family}
        {...props}
      >
        {children}
      </C.Text>
    );
  return (
    <C.Text
      color={theme.color.primary}
      fontFamily={theme.font.family}
      {...props}
    >
      {children}
    </C.Text>
  );
};
