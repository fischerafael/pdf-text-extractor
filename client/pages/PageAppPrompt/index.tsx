import { Button } from "@/client/components/Button";
import { ContentVStack } from "@/client/components/ContentVStack";
import { DashboardTemplate } from "@/client/components/DashboardTemplate";
import { Footer } from "@/client/components/Footer";
import { HeaderAppFactory } from "@/client/components/HeaderFactory";
import { LinksContainerWithIcons } from "@/client/components/LinksContainerWithIcons";
import { Logo } from "@/client/components/Logo";
import { Text } from "@/client/components/Text";
import * as C from "@chakra-ui/react";
import { usePageAppPrompt } from "./hook";

export const PageAppPrompt = () => {
  const { controllers } = usePageAppPrompt();

  return (
    <DashboardTemplate
      logoSlot={<Logo />}
      linksSlot={<LinksContainerWithIcons />}
      headerSlot={<HeaderAppFactory />}
      mainSlot={
        <ContentVStack align="flex-start">
          <C.HStack justify="space-between" w="full">
            <Text variant="h1">Prompt</Text>
            <Button
              variant="outline"
              bg="transparent"
              onClick={controllers.handleNavigateBackToPrompts}
            >
              Back to Prompts
            </Button>
          </C.HStack>

          <ContentVStack px="0" spacing="8" w="full" align="flex-start">
            <Text variant="h1">Prompt </Text>
          </ContentVStack>
        </ContentVStack>
      }
      footerSlot={<Footer />}
    />
  );
};
