import React from "react";
import { Tag } from "../Tag";
import { theme } from "@/client/config/theme";

export const TagHour = ({ children }: { children: React.ReactNode }) => {
  return (
    <Tag
      bg="transparent"
      border="1px"
      color={theme.color.primary}
      borderColor={theme.border.color}
      py="1"
      hasIconLeft={false}
      size="sm"
      fontSize="10px"
    >
      {children}
    </Tag>
  );
};
