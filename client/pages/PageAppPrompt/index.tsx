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
import { Tag } from "@/client/components/Tag";
import { Avatar } from "@/client/components/Avatar";
import { CardContainer } from "@/client/components/CardContainer";
import { InputText } from "@/client/components/InputText";
import { InputTextArea } from "@/client/components/InputTextArea";

export const PageAppPrompt = () => {
  const { controllers, presenters } = usePageAppPrompt();

  return (
    <DashboardTemplate
      logoSlot={<Logo />}
      linksSlot={<LinksContainerWithIcons />}
      headerSlot={<HeaderAppFactory />}
      mainSlot={
        <ContentVStack align="flex-start">
          <C.HStack justify="space-between" w="full" align="flex-start">
            <C.VStack align="flex-start">
              <Tag>Prompt ID: {presenters.id}</Tag>
              <Text variant="h1">{presenters.title}</Text>
            </C.VStack>

            <Button
              variant="outline"
              bg="transparent"
              onClick={controllers.handleNavigateBackToPrompts}
            >
              Back
            </Button>
          </C.HStack>

          <ContentVStack px="0" w="full" align="flex-start">
            <CardContainer>
              <Text variant="xs">Use Case</Text>
              <Text>{presenters.description}</Text>
              <C.Divider py="2" />
              <Text variant="xs">Categories</Text>
              <C.HStack>
                {presenters.categories.map((entry) => (
                  <Tag key={entry}>{entry}</Tag>
                ))}
              </C.HStack>
              <Text variant="xs">Departments</Text>
              <C.HStack>
                {presenters.departments.map((entry) => (
                  <Tag key={entry}>{entry}</Tag>
                ))}
              </C.HStack>
              <C.Divider py="2" />
              <C.Grid
                w="full"
                gap="8"
                templateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr"]}
              >
                <C.VStack w="full" align="flex-start">
                  <Text variant="xs">Max Response</Text>
                  <Tag>{presenters.maxResponse}</Tag>
                </C.VStack>
                <C.VStack w="full" align="flex-start">
                  <Text variant="xs">Top P</Text>
                  <Tag>{presenters.topP}</Tag>
                </C.VStack>
                <C.VStack w="full" align="flex-start">
                  <Text variant="xs">Temperature</Text>
                  <Tag>{presenters.temperature}</Tag>
                </C.VStack>
              </C.Grid>
              <C.Divider py="2" />
              <Text variant="xs">Author</Text>
              <Avatar title={presenters.author} />
            </CardContainer>

            <CardContainer spacing="4">
              <Tag>Customize Prompt</Tag>
              <C.VStack w="full" align="flex-start">
                {presenters.promptHTML.map((el) => {
                  if (el.element.html === "input") {
                    return (
                      <InputTextArea
                        label={el.label}
                        onChange={(e) =>
                          controllers.handleUpdatePrompt(
                            el.label,
                            e.target.value
                          )
                        }
                      />
                    );
                  }
                  return (
                    <Text fontSize={"lg"} key={el.label}>
                      {el.label}
                    </Text>
                  );
                })}
              </C.VStack>
            </CardContainer>
          </ContentVStack>
        </ContentVStack>
      }
      footerSlot={<Footer />}
    />
  );
};
