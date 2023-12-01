import React from "react";
import * as C from "@chakra-ui/react";

export const CardContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <C.Grid
      w="full"
      gap="8"
      py="8"
      templateColumns={["1fr", "1fr", "1fr 1fr", "1fr 1fr 1fr"]}
    >
      {children}
    </C.Grid>
  );
};
