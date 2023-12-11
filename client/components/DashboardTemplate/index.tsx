import React from "react";
import * as C from "@chakra-ui/react";
import { theme } from "@/client/config/theme";

export const DashboardTemplate = ({
  logoSlot,
  headerSlot,
  linksSlot,
  mainSlot,
  footerSlot,
}: {
  logoSlot: React.ReactElement;
  headerSlot: React.ReactElement;
  linksSlot: React.ReactElement;
  mainSlot: React.ReactElement;
  footerSlot: React.ReactElement;
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
      <C.VStack w="full" bg={`gray.50`} spacing="0" h="100vh">
        <C.VStack px="8" w="full" h="10vh" spacing="0">
          {headerSlot}
        </C.VStack>
        <C.Grid
          w="full"
          gap="0"
          h="90vh"
          overflowY="auto"
          css={{
            "&::-webkit-scrollbar": {
              width: "10px",
            },
            "&::-webkit-scrollbar-track": {
              width: "10px",
              background: "transparent",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "lightgray",
            },
          }}
        >
          <C.VStack h="90vh" w="full" spacing="0">
            {mainSlot}
          </C.VStack>
          <C.VStack h="10vh" w="full" spacing="0">
            {footerSlot}
          </C.VStack>
        </C.Grid>
      </C.VStack>
    </C.Grid>
  );
};
