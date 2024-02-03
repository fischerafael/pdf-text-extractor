import React from "react";
import * as C from "@chakra-ui/react";
import { theme } from "@/client/config/theme";

interface TextProps extends C.TextProps {
  children: React.ReactNode;
  variant?: "h1" | "h2" | "h3" | "p" | "xs";
}

export const TextTitleMain = ({ children, ...props }: TextProps) => {
  return (
    <C.Text
      color={theme.color.primary}
      fontWeight="medium"
      fontFamily={theme.font.family}
      fontSize="xl"
      {...props}
    >
      {children}
    </C.Text>
  );
};

export const TextTitleSecondary = ({ children, ...props }: TextProps) => {
  return (
    <C.Text
      color={theme.color.primary}
      fontFamily={theme.font.family}
      fontSize={"lg"}
      {...props}
    >
      {children}
    </C.Text>
  );
};

export const TextTitleTertiary = ({ children, ...props }: TextProps) => {
  return (
    <C.Text
      color={theme.color.primary}
      fontFamily={theme.font.family}
      fontSize={"md"}
      {...props}
    >
      {children}
    </C.Text>
  );
};

export const TextSubTitle = ({ children, ...props }: TextProps) => {
  return (
    <C.Text
      color={theme.color.primary}
      fontFamily={theme.font.family}
      fontSize={"sm"}
      {...props}
    >
      {children}
    </C.Text>
  );
};

export const TextRegular = ({ children, ...props }: TextProps) => {
  return (
    <C.Text
      color={theme.color.primary}
      fontFamily={theme.font.family}
      fontSize={"xs"}
      {...props}
    >
      {children}
    </C.Text>
  );
};

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
