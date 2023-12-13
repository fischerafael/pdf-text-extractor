import React from "react";
import * as C from "@chakra-ui/react";
import { theme } from "@/client/config/theme";

interface IconProps extends C.IconButtonProps {
  icon: React.ReactElement;
  ariaLabel?: string;
}

export const IconButton = ({ ariaLabel = "" }: IconProps) => {
  return <C.IconButton bg={theme.mainColour} aria-label={ariaLabel} />;
};
