import { theme } from "@/client/config/theme";
import * as C from "@chakra-ui/react";
import React from "react";

export const DashboardTemplate = ({
  logoSlot,
  headerSlot,
  linksSlot,
  mainSlot,
  footerSlot,
}: {
  logoSlot?: React.ReactElement;
  headerSlot?: React.ReactElement;
  linksSlot?: React.ReactElement;
  mainSlot?: React.ReactElement;
  footerSlot?: React.ReactElement;
}) => {
  return (
    <C.Grid w="full" h="100vh" templateColumns={["1fr", "1fr", "80px 1fr"]}>
      <C.VStack
        px="4"
        bg="white"
        w="full"
        h="full"
        spacing="0"
        display={["none", "none", "flex"]}
        shadow={theme.shadow.regular}
        zIndex="10"
        borderRight="1px"
        borderColor={theme.border.color}
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
          <C.VStack w="full" spacing="0">
            {mainSlot}
            <C.VStack h="10vh" w="full" spacing="0">
              {footerSlot}
            </C.VStack>
          </C.VStack>
        </C.Grid>
      </C.VStack>
    </C.Grid>
  );
};
