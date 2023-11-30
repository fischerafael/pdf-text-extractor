import { theme } from "@/client/config/theme";
import * as C from "@chakra-ui/react";
import { Button } from "../Button";

interface HeroSectionProps {
  headline?: string;
  subHeadline?: string;
  ctaSlot?: React.ReactNode;
  heroVisualSlot?: React.ReactNode;
}

export const HeroSection = ({ heroVisualSlot }: HeroSectionProps) => {
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
          Foque no que importa nós cuidamos do resto
        </C.Text>
        <C.Text textAlign="center" fontSize="xl">
          Queremos te dar mais tempo para se concentrar nas coisas que importam.
          O trabalho repetitivo tem matado lentamente a criatividade humana. Por
          isso, nosso SuperCriador irá trabalhar para você.
        </C.Text>
        <Button size="lg">Comece</Button>
        <C.HStack w="full" maxW="container.lg">
          {heroVisualSlot}
        </C.HStack>
      </C.VStack>
    </C.VStack>
  );
};
