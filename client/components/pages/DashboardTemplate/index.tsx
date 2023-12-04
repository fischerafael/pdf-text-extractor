import React from "react";
import * as C from "@chakra-ui/react";
import { theme } from "@/client/config/theme";

export const DashboardTemplate = ({
  logoSlot,
  headerSlot,
}: {
  logoSlot: React.ReactElement;
  headerSlot: React.ReactElement;
}) => {
  return (
    <C.Grid w="full" h="100vh" templateColumns={["1fr", "96px 1fr"]}>
      <C.VStack p="4" bg="white" w="full" h="full">
        {logoSlot}
      </C.VStack>
      <C.VStack
        w="full"
        bg={`${theme.accentColour}.50`}
        h="full"
        px="8"
        spacing="0"
      >
        {headerSlot}
        <C.Text>test</C.Text>
      </C.VStack>
    </C.Grid>
  );
};
