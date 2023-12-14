import { Avatar } from "@/client/components/Avatar";
import { Button } from "@/client/components/Button";
import { ContentVStack } from "@/client/components/ContentVStack";
import { DashboardTemplate } from "@/client/components/DashboardTemplate";
import { Footer } from "@/client/components/Footer";
import { Header } from "@/client/components/Header";
import { InputSelectMultiple } from "@/client/components/InputSelectMultiple";
import { InputText } from "@/client/components/InputText";
import { LinksContainer } from "@/client/components/LinksContainer";
import { LinksContainerWithIcons } from "@/client/components/LinksContainerWithIcons";
import { Logo } from "@/client/components/Logo";
import { Text } from "@/client/components/Text";
import * as C from "@chakra-ui/react";
import { usePageApp } from "./hook";
import { CardContainer } from "@/client/components/CardContainer";
import { Tag } from "@/client/components/Tag";
import { theme } from "@/client/config/theme";
import { AccordionContainer } from "@/client/components/AccordionContainer";
import { AccordionItem } from "@/client/components/AccordionItem";

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
        <ContentVStack align="flex-start">
          <Text variant="h1">Prompts</Text>
          <AccordionContainer>
            <AccordionItem title="Advanced Search">
              <C.VStack w="full" spacing="4" pb="8">
                <InputText
                  label="Prompt Title"
                  value={presenters.searchInputValue}
                  onChange={(e) =>
                    controllers.onChangeSearchInput(e.target.value)
                  }
                />
                <C.Grid
                  w="full"
                  gap="4"
                  templateColumns={["1fr", "1fr", "1fr 1fr"]}
                >
                  <InputSelectMultiple
                    label="Categories"
                    options={presenters.categoryOptions}
                    updateOptions={controllers.updateCategories}
                  />
                  <InputSelectMultiple
                    label="Departments"
                    options={presenters.departmentOptions}
                    updateOptions={controllers.updateDepartments}
                  />
                  <InputSelectMultiple
                    label="AI Models"
                    options={presenters.aiModelOptions}
                    updateOptions={controllers.updateAIModels}
                  />
                  <InputSelectMultiple
                    label="Authors"
                    options={presenters.authorOptions}
                    updateOptions={controllers.updateAuthors}
                  />
                </C.Grid>
                <Button alignSelf="flex-end">Search</Button>
              </C.VStack>
            </AccordionItem>
          </AccordionContainer>

          <ContentVStack px="0" spacing="8">
            {presenters.prompts.map((pr) => (
              <CardContainer key={pr.id}>
                <Text variant="h1">{pr.title}</Text>
                <Text>{pr.description}</Text>
                <C.Divider py="2" />
                <Text variant="xs">Categories</Text>
                <C.HStack>
                  {pr.categories.map((entry) => (
                    <Tag key={entry}>{entry}</Tag>
                  ))}
                </C.HStack>
                <Text variant="xs">Departments</Text>
                <C.HStack>
                  {pr.departments.map((entry) => (
                    <Tag key={entry}>{entry}</Tag>
                  ))}
                </C.HStack>
                <C.Divider py="2" />
                <Text variant="xs">Author</Text>
                <Avatar title={pr.author} />
              </CardContainer>
            ))}
          </ContentVStack>
        </ContentVStack>
      }
      footerSlot={<Footer />}
    />
  );
};
