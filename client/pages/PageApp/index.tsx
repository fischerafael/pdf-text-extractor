import { Avatar } from "@/client/components/Avatar";
import { Button } from "@/client/components/Button";
import { ContentVStack } from "@/client/components/ContentVStack";
import { DashboardTemplate } from "@/client/components/DashboardTemplate";
import { Footer } from "@/client/components/Footer";
import { Header } from "@/client/components/Header";
import { LinksContainer } from "@/client/components/LinksContainer";
import { LinksContainerWithIcons } from "@/client/components/LinksContainerWithIcons";
import { Logo } from "@/client/components/Logo";
import { usePageApp } from "./hook";
import * as C from "@chakra-ui/react";
import { InputText } from "@/client/components/InputText";
import { InputSelect } from "@/client/components/InputSelect";
import { Text } from "@/client/components/Text";

export const PageApp = () => {
  const { controllers, presenters } = usePageApp();

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
          <ContentVStack align="flex-start" px="0" minH="0vh">
            <Text variant="h2">Search</Text>
            <C.VStack w="full" spacing="4" pb="8">
              <InputText label="Prompt Title" />
              <C.HStack w="full" spacing="8">
                <InputSelect
                  label="Categories"
                  options={presenters.categoryOptions}
                />
                <InputSelect
                  label="Departments"
                  options={presenters.departmentOptions}
                />
                <InputSelect
                  label="AI Models"
                  options={presenters.aiModelOptions}
                />
              </C.HStack>
            </C.VStack>
          </ContentVStack>
          <ContentVStack px="0">
            <p>hi</p>
          </ContentVStack>
        </ContentVStack>
      }
      footerSlot={<Footer />}
    />
  );
};
