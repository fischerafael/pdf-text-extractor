import React from "react";
import * as C from "@chakra-ui/react";

export const FeatureSectionContainer = ({
  leftSlot,
  rightSlot,
}: {
  leftSlot: React.ReactElement;
  rightSlot: React.ReactElement;
}) => {
  return (
    <C.HStack w="full" p="8" justify="center">
      <C.Grid
        templateColumns={["1fr", "1fr", "1fr 1fr"]}
        w="full"
        px="8"
        gap="8"
        maxW="container.lg"
      >
        {leftSlot}
        {rightSlot}
      </C.Grid>
    </C.HStack>
  );
};
