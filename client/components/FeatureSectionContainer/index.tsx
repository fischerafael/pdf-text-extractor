import React from "react";
import * as C from "@chakra-ui/react";

export const FeatureSectionContainer = ({
  leftSlot,
  rightSlot,
  renderFirstOnMobile = "left",
}: {
  leftSlot: React.ReactElement;
  rightSlot: React.ReactElement;
  renderFirstOnMobile?: "left" | "right";
}) => {
  return (
    <C.HStack w="full" p="8" justify="center">
      <C.Grid
        display={["none", "none", "grid"]}
        templateColumns={["1fr", "1fr", "1fr 1fr"]}
        w="full"
        px="8"
        gap="8"
        maxW="container.lg"
      >
        {leftSlot}
        {rightSlot}
      </C.Grid>
      {renderFirstOnMobile === "left" ? (
        <C.Grid
          display={["grid", "grid", "none"]}
          templateColumns={"1fr"}
          w="full"
          px="8"
          gap="8"
          maxW="container.lg"
        >
          {leftSlot}
          {rightSlot}
        </C.Grid>
      ) : (
        <C.Grid
          display={["grid", "grid", "none"]}
          templateColumns={"1fr"}
          w="full"
          px="8"
          gap="8"
          maxW="container.lg"
        >
          {rightSlot}
          {leftSlot}
        </C.Grid>
      )}
    </C.HStack>
  );
};
