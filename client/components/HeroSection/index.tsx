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
      <C.VStack w="full" maxW="container.lg" align="center" pt="20" gap="8">
        <C.Text
          lineHeight="1.15"
          fontSize="6xl"
          fontWeight="bold"
          textAlign="center"
          color={theme.mainColour}
        >
          {headline}
        </C.Text>
        <C.Text textAlign="center" fontSize="xl" maxW="400px">
          {subHeadline}
        </C.Text>
        {ctaSlot}
        <C.HStack w="full" maxW="container.lg" justify="center">
          {heroVisualSlot}
        </C.HStack>
      </C.VStack>
    </C.VStack>
  );
};
