import React from "react";
import * as C from "@chakra-ui/react";

export const CardListContainer = ({
  children,
  templateColumns = ["1fr", "1fr", "1fr 1fr", "1fr 1fr 1fr"],
}: {
  children: React.ReactNode;
  templateColumns?: string[];
}) => {
  return (
    <C.Grid w="full" gap="8" py="8" templateColumns={templateColumns}>
      {children}
    </C.Grid>
  );
};
