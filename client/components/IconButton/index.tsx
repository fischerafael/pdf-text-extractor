import React from "react";
import * as C from "@chakra-ui/react";
import { theme } from "@/client/config/theme";

interface IconProps extends C.IconButtonProps {
  icon: React.ReactElement;
  ariaLabel?: string;
}

export const IconButton = ({ ariaLabel = "", ...props }: IconProps) => {
  return (
    <C.IconButton
      bgGradient="linear(to-r, purple.400, purple.600)"
      {...props}
      aria-label={ariaLabel}
    />
  );
};
