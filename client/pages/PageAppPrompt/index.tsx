import { ContentVStack } from "@/client/components/ContentVStack";
import { DashboardTemplate } from "@/client/components/DashboardTemplate";
import { Footer } from "@/client/components/Footer";
import { HeaderAppFactory } from "@/client/components/HeaderFactory";
import { LinksContainerWithIcons } from "@/client/components/LinksContainerWithIcons";
import { Logo } from "@/client/components/Logo";
import { Text } from "@/client/components/Text";

export const PageAppPrompt = () => {
  return (
    <DashboardTemplate
      logoSlot={<Logo />}
      linksSlot={<LinksContainerWithIcons />}
      headerSlot={<HeaderAppFactory />}
      mainSlot={
        <ContentVStack align="flex-start">
          <Text variant="h1">Prompt</Text>
          <ContentVStack px="0" spacing="8">
            <Text variant="h1">Prompt </Text>
          </ContentVStack>
        </ContentVStack>
      }
      footerSlot={<Footer />}
    />
  );
};
