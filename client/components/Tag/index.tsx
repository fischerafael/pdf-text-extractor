import * as C from "@chakra-ui/react";
import * as Icon from "react-icons/hi";
import React from "react";

interface TagProps extends C.TagProps {
  children: React.ReactNode;
}

export const Tag = ({ children, ...props }: TagProps) => {
  return (
    <C.Tag
      bgGradient="linear(to-r, purple.400, purple.600)"
      color="white"
      fontWeight="regular"
      fontSize="xs"
      cursor="pointer"
      borderRadius="full"
      px="4"
      py="2"
      {...props}
    >
      <C.TagLeftIcon boxSize="12px" as={Icon.HiOutlineX} />
      {children}
    </C.Tag>
  );
};
