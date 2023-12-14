import { Button } from "@/client/components/Button";
import { ContentVStack } from "@/client/components/ContentVStack";
import { DashboardTemplate } from "@/client/components/DashboardTemplate";
import { Footer } from "@/client/components/Footer";
import { HeaderAppFactory } from "@/client/components/HeaderFactory";
import { InputText } from "@/client/components/InputText";
import { LinksContainerWithIcons } from "@/client/components/LinksContainerWithIcons";
import { Logo } from "@/client/components/Logo";
import { Text } from "@/client/components/Text";
import { usePageAppSettings } from "./hook";

export const PageAppSettings = () => {
  usePageAppSettings();
  return (
    <DashboardTemplate
      logoSlot={<Logo />}
      linksSlot={<LinksContainerWithIcons />}
      headerSlot={<HeaderAppFactory />}
      mainSlot={
        <ContentVStack>
          <ContentVStack minH="40vh" align="flex-start">
            <Text variant="h3">Change Password</Text>
            <InputText label="New Password" isDisabled />
            <InputText label="Confirm New Password" isDisabled />
            <Button isDisabled>Change Password</Button>
          </ContentVStack>
        </ContentVStack>
      }
      footerSlot={<Footer />}
    />
  );
};
