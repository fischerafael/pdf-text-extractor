import React from "react";
import * as C from "@chakra-ui/react";
import { theme } from "@/client/config/theme";

export interface FeatureSectionContentProps {
  heading: string;
  content: string;
  ctaSlot?: React.ReactElement;
}

export const FeatureSectionContent = ({
  content,
  heading,
  ctaSlot,
}: FeatureSectionContentProps) => {
  return (
    <C.VStack w="full" align="flex-start" h="full" justify="center" gap="4">
      <C.Heading fontSize="xl" fontWeight="medium">
        {heading}
      </C.Heading>
      <C.Text fontFamily={theme.font.family}>{content}</C.Text>
      {ctaSlot}
    </C.VStack>
  );
};
