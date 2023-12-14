import React from "react";
import * as C from "@chakra-ui/react";
import { Text } from "../Text";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

export const AccordionItem = ({ title, children }: AccordionItemProps) => {
  return (
    <C.AccordionItem
      w="full"
      border="1px"
      borderRadius="4"
      borderColor="gray.200"
    >
      <C.AccordionButton w="full">
        <Text flex="1" fontSize="xs" textAlign="left">
          {title}
        </Text>
        <C.AccordionIcon />
      </C.AccordionButton>
      <C.AccordionPanel>{children}</C.AccordionPanel>
    </C.AccordionItem>
  );
};
