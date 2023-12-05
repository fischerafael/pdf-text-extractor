import React from "react";
import * as C from "@chakra-ui/react";
import { theme } from "@/client/config/theme";

export const DashboardTemplate = ({
  logoSlot,
  headerSlot,
  linksSlot,
}: {
  logoSlot: React.ReactElement;
  headerSlot: React.ReactElement;
  linksSlot: React.ReactElement;
}) => {
  return (
    <C.Grid w="full" h="100vh" templateColumns={["1fr", "1fr", "96px 1fr"]}>
      <C.VStack
        px="4"
        bg="white"
        w="full"
        h="full"
        spacing="0"
        display={["none", "none", "flex"]}
        shadow="md"
        zIndex="10"
      >
        <C.VStack h="10vh" justify="center">
          {logoSlot}
        </C.VStack>
        <C.VStack h="full">{linksSlot}</C.VStack>
      </C.VStack>
      <C.VStack w="full" bg={`gray.50`} h="full" px="8" spacing="0">
        {headerSlot}
        <C.Text>test</C.Text>
      </C.VStack>
    </C.Grid>
  );
};
