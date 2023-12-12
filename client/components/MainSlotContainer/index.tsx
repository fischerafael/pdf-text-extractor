import React from "react";
import * as C from "@chakra-ui/react";

export const MainSlotContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <C.VStack minH="90vh" w="full" p="8">
      {children}
    </C.VStack>
  );
};
