import React from "react";
import * as C from "@chakra-ui/react";

export const AccordionContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <C.Accordion w="full" py="4" allowToggle>
      {children}
    </C.Accordion>
  );
};
