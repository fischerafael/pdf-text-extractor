import React from "react";
import * as C from "@chakra-ui/react";

interface TextProps extends C.TextProps {
  children: React.ReactNode;
  variant?: "h1" | "h2" | "h3" | "p";
}

export const Text = ({ children, variant = "p", ...props }: TextProps) => {
  if (variant === "h1")
    return (
      <C.Text fontSize="3xl" fontWeight="medium" {...props}>
        {children}
      </C.Text>
    );
  if (variant === "h2")
    return (
      <C.Text fontSize="xl" fontWeight="medium" {...props}>
        {children}
      </C.Text>
    );
  if (variant === "h3")
    return (
      <C.Text fontSize="lg" fontWeight="medium" {...props}>
        {children}
      </C.Text>
    );
  return <C.Text {...props}>{children}</C.Text>;
};
