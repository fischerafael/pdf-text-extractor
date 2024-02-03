import * as C from "@chakra-ui/react";
import * as Icon from "react-icons/hi";
import React from "react";
import { theme } from "@/client/config/theme";

interface TagProps extends C.TagProps {
  children: React.ReactNode;
  hasIconLeft?: boolean;
}

export const Tag = ({ children, hasIconLeft = true, ...props }: TagProps) => {
  return (
    <C.Tag
      bgGradient={`linear(to-r, ${theme.color.secondary}, ${theme.color.primary})`}
      color="white"
      fontWeight="regular"
      fontSize="xs"
      cursor="pointer"
      borderRadius={theme.border.radius.regular}
      py="1"
      size="sm"
      {...props}
    >
      {hasIconLeft && <C.TagLeftIcon boxSize="12px" as={Icon.HiOutlineX} />}
      {children}
    </C.Tag>
  );
};
