import React from "react";
import * as C from "@chakra-ui/react";
import { Text } from "../Text";
import { theme } from "@/client/config/theme";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

export const AccordionItem = ({ title, children }: AccordionItemProps) => {
  return (
    <C.AccordionItem
      w="full"
      border="1px"
      borderRadius={theme.border.radius.regular}
      borderColor={theme.border.color}
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
