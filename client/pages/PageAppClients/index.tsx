import { DashboardTemplate } from "@/client/components/DashboardTemplate";
import { HeaderAppFactory } from "@/client/components/HeaderFactory";
import { LinksContainerWithIcons } from "@/client/components/LinksContainerWithIcons";
import { Logo } from "@/client/components/Logo";
import * as C from "@chakra-ui/react";
import { Text } from "@/client/components/Text";

export const PageAppClients = () => {
  return (
    <DashboardTemplate
      logoSlot={<Logo />}
      linksSlot={<LinksContainerWithIcons />}
      headerSlot={<HeaderAppFactory />}
      mainSlot={
        <C.VStack w="full" align="center" p="8">
          <C.VStack w="full" maxW="container.sm" align="flex-start" gap="8">
            <Text variant="h1">Clients</Text>
          </C.VStack>
          <C.VStack minH="40vh" justify="center">
            <Text>Comming Soon...</Text>
          </C.VStack>
        </C.VStack>
      }
    />
  );
};
