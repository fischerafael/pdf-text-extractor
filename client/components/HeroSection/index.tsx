import { theme } from "@/client/config/theme";
import { Header } from "../Header";
import { HeaderAction } from "../HeaderAction";
import { HeaderHorizontalLinks } from "../HeaderHorizontalLinks";
import { Logo } from "../Logo";
import * as C from "@chakra-ui/react";
import { Button } from "../Button";

interface HeroSectionProps {
  headline?: string;
  subHeadline?: string;
  ctaSlot?: React.ReactNode;
  heroImg?: string;
}

export const HeroSection = ({}: HeroSectionProps) => {
  return (
    <C.VStack w="full">
      <C.VStack
        w="full"
        px="4"
        maxW="container.lg"
        align="center"
        pt="20"
        gap="8"
      >
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
        <C.Image
          p="8"
          objectFit="cover"
          w="full"
          maxW="container.lg"
          src="https://images.unsplash.com/photo-1519211975560-4ca611f5a72a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </C.VStack>
    </C.VStack>
  );
};
