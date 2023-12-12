import React from "react";
import * as C from "@chakra-ui/react";

export const ContentVStack = ({
  children,
  minH = "90vh",
}: {
  children: React.ReactNode;
  minH?: string;
}) => {
  return (
    <C.VStack minH={minH} w="full" p="8">
      {children}
    </C.VStack>
  );
};
