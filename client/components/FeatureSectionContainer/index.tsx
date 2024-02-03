import React from "react";
import * as C from "@chakra-ui/react";
import { theme } from "@/client/config/theme";

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
    <C.HStack w="full" py="8" justify="center">
      <C.Grid
        display={["none", "none", "grid"]}
        templateColumns={["1fr", "1fr", "1fr 1fr"]}
        w="full"
        gap="8"
        maxW={theme.width.container.regular}
      >
        {leftSlot}
        {rightSlot}
      </C.Grid>
      {renderFirstOnMobile === "left" ? (
        <C.Grid
          display={["grid", "grid", "none"]}
          templateColumns={"1fr"}
          w="full"
          gap="8"
          maxW={theme.width.container.regular}
        >
          {leftSlot}
          {rightSlot}
        </C.Grid>
      ) : (
        <C.Grid
          display={["grid", "grid", "none"]}
          templateColumns={"1fr"}
          w="full"
          gap="8"
          maxW={theme.width.container.regular}
        >
          {rightSlot}
          {leftSlot}
        </C.Grid>
      )}
    </C.HStack>
  );
};
