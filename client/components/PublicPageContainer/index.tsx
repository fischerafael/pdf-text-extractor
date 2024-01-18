import React from "react";
import * as C from "@chakra-ui/react";

export const ContainerPagePublic = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <C.VStack w="full" spacing="8" px="8" fontFamily="sans-serif">
    {children}
  </C.VStack>
);
