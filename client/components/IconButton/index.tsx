import React from "react";
import * as C from "@chakra-ui/react";

interface IconProps extends C.IconButtonProps {
  icon: React.ReactElement;
  ariaLabel?: string;
}

export const IconButton = ({ ariaLabel = "" }: IconProps) => {
  return <C.IconButton aria-label={ariaLabel} />;
};
