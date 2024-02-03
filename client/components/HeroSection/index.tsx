import { theme } from "@/client/config/theme";
import * as C from "@chakra-ui/react";

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
      <C.VStack
        w="full"
        maxW={theme.width.container.regular}
        align="center"
        pt="12"
        gap="4"
      >
        <C.Text
          fontFamily={theme.font.family}
          lineHeight="1.15"
          fontSize="6xl"
          fontWeight="bold"
          textAlign="center"
          color={theme.color.primary}
        >
          {headline}
        </C.Text>
        <C.Text
          fontFamily={theme.font.family}
          textAlign="center"
          fontSize="xl"
          maxW="600px"
        >
          {subHeadline}
        </C.Text>
        {ctaSlot}
        <C.HStack
          pt="8"
          w="full"
          maxW={theme.width.container.regular}
          justify="center"
        >
          {heroVisualSlot}
        </C.HStack>
      </C.VStack>
    </C.VStack>
  );
};
