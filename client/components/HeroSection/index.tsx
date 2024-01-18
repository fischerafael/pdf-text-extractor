import { theme } from "@/client/config/theme";
import * as C from "@chakra-ui/react";
import { Button } from "../Button";

interface HeroSectionProps {
  headline?: string;
  subHeadline?: string;
  ctaSlot?: React.ReactNode;
  heroVisualSlot?: React.ReactNode;
}

export const HeroSection = ({
  heroVisualSlot,
  headline,
  ctaSlot,
  subHeadline,
}: HeroSectionProps) => {
  return (
    <C.VStack w="full">
      <C.VStack w="full" maxW="container.lg" align="center" pt="12" gap="4">
        <C.Text
          lineHeight="1.15"
          fontSize="6xl"
          fontWeight="bold"
          textAlign="center"
          color="purple.600"
        >
          {headline}
        </C.Text>
        <C.Text textAlign="center" fontSize="xl" maxW="600px">
          {subHeadline}
        </C.Text>
        {ctaSlot}
        <C.HStack pt="8" w="full" maxW="container.lg" justify="center">
          {heroVisualSlot}
        </C.HStack>
      </C.VStack>
    </C.VStack>
  );
};
