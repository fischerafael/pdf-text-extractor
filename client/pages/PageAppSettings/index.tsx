import { Avatar } from "@/client/components/Avatar";
import { Button } from "@/client/components/Button";
import { ContentVStack } from "@/client/components/ContentVStack";
import { DashboardTemplate } from "@/client/components/DashboardTemplate";
import { Footer } from "@/client/components/Footer";
import { Header } from "@/client/components/Header";
import { LinksContainer } from "@/client/components/LinksContainer";
import { LinksContainerWithIcons } from "@/client/components/LinksContainerWithIcons";
import { Logo } from "@/client/components/Logo";
import { usePageAppSettings } from "./hook";
import { InputText } from "@/client/components/InputText";
import { Text } from "@/client/components/Text";

export const PageAppSettings = () => {
  const { presenters, controllers } = usePageAppSettings();

  return (
    <DashboardTemplate
      logoSlot={<Logo />}
      linksSlot={<LinksContainerWithIcons />}
      headerSlot={
        <Header
          logoSlot={
            <Avatar
              title={presenters.userName}
              subTitle={presenters.userEmail}
              src={presenters.userName}
            />
          }
          linksSlot={<LinksContainer />}
          actionSlot={
            <Button onClick={controllers.handleLogOut}>Log Out</Button>
          }
          isDisplayLinksOnWeb={false}
        />
      }
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
