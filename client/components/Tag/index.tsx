import React from "react";
import * as C from "@chakra-ui/react";
import { theme } from "@/client/config/theme";

interface TagProps extends C.TagProps {
  children: React.ReactNode;
}

export const Tag = ({ children, ...props }: TagProps) => {
  return (
    <C.Tag
      bg={theme.mainColour}
      color="white"
      fontWeight="regular"
      fontSize="xs"
      cursor="pointer"
      {...props}
    >
      {children}
    </C.Tag>
  );
};
