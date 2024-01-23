import React from "react";
import { Tag } from "../Tag";

export const TagHour = ({ children }: { children: React.ReactNode }) => {
  return (
    <Tag
      bg="transparent"
      border="1px"
      color="purple.600"
      borderColor="purple.600"
      py="0"
      hasIconLeft={false}
      fontSize="10px"
    >
      {children}
    </Tag>
  );
};
