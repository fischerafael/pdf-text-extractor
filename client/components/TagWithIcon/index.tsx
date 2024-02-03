import React from "react";
import { Tag } from "../Tag";
import * as C from "@chakra-ui/react";
import { IconType } from "react-icons";
import { theme } from "@/client/config/theme";

interface TagWithIconProps extends C.TagProps {
  children: React.ReactNode;
  icon: IconType;
}

export const TagWithIcon = ({ children, icon, ...props }: TagWithIconProps) => {
  return (
    <Tag {...props}>
      <C.Text fontFamily={theme.font.family} w="full" pr="2">
        {children}
      </C.Text>
      <C.Icon w="4" h="4" as={icon} />
    </Tag>
  );
};
