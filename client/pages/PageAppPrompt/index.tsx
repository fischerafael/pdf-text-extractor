import { AccordionContainer } from "@/client/components/AccordionContainer";
import { AccordionItem } from "@/client/components/AccordionItem";
import { Avatar } from "@/client/components/Avatar";
import { Button } from "@/client/components/Button";
import { CardContainer } from "@/client/components/CardContainer";
import { ContentVStack } from "@/client/components/ContentVStack";
import { DashboardTemplate } from "@/client/components/DashboardTemplate";
import { Footer } from "@/client/components/Footer";
import { HeaderAppFactory } from "@/client/components/HeaderFactory";
import { InputTextArea } from "@/client/components/InputTextArea";
import { LinksContainerWithIcons } from "@/client/components/LinksContainerWithIcons";
import { Logo } from "@/client/components/Logo";
import { Tag } from "@/client/components/Tag";
import { Text } from "@/client/components/Text";
import * as C from "@chakra-ui/react";
import { usePageAppPrompt } from "./hook";
import * as Icon from "react-icons/hi";
import { TagWithIcon } from "@/client/components/TagWithIcon";

export const PageAppPrompt = () => {
  const { controllers, presenters } = usePageAppPrompt();

  return (
    <DashboardTemplate
      logoSlot={<Logo />}
      linksSlot={<LinksContainerWithIcons />}
      headerSlot={<HeaderAppFactory />}
      mainSlot={
        <ContentVStack align="flex-start" maxW="container.lg">
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
          <CardContainer cursor="normal">
            <Tag>Use Case</Tag>
            <Text>{presenters.description}</Text>
            <AccordionContainer>
              <AccordionItem title="Details">
                <Text variant="xs">Categories</Text>
                <C.HStack>
                  {presenters.categories.map((entry) => (
                    <Tag key={entry}>{entry}</Tag>
                  ))}
                </C.HStack>
                <br />
                <Text variant="xs">Departments</Text>
                <C.HStack>
                  {presenters.departments.map((entry) => (
                    <Tag key={entry}>{entry}</Tag>
                  ))}
                </C.HStack>
                <br />
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
                <br />
                <Text variant="xs">Author</Text>
                <Avatar title={presenters.author} />
              </AccordionItem>
            </AccordionContainer>
          </CardContainer>

          <ContentVStack px="0" w="full" align="flex-start">
            <CardContainer cursor="normal" spacing="4">
              <Tag>Customize Prompt</Tag>
              <C.Divider py="2" />
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
              <C.Divider py="2" />
            </CardContainer>

            <CardContainer cursor="normal" spacing="4">
              <Tag>Your Final Prompt</Tag>
              <Text>{presenters.finalPrompt}</Text>
              <Button
                alignSelf="flex-end"
                onClick={() =>
                  controllers.handleCopyToClipboard(presenters.finalPrompt)
                }
              >
                Copy Prompt
              </Button>
              <C.Divider py="2" />
              <C.Grid
                w="full"
                gap="8"
                templateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr"]}
              >
                <C.VStack w="full" align="flex-start">
                  <Text variant="xs">Max Response</Text>
                  <TagWithIcon
                    icon={Icon.HiOutlineDuplicate}
                    onClick={() =>
                      controllers.handleCopyToClipboard(presenters.maxResponse)
                    }
                  >
                    {presenters.maxResponse}
                  </TagWithIcon>
                </C.VStack>
                <C.VStack w="full" align="flex-start">
                  <Text variant="xs">Top P</Text>
                  <TagWithIcon
                    icon={Icon.HiOutlineDuplicate}
                    onClick={() =>
                      controllers.handleCopyToClipboard(presenters.topP)
                    }
                  >
                    {presenters.topP}
                  </TagWithIcon>
                </C.VStack>
                <C.VStack w="full" align="flex-start">
                  <Text variant="xs">Temperature</Text>
                  <TagWithIcon
                    icon={Icon.HiOutlineDuplicate}
                    onClick={() =>
                      controllers.handleCopyToClipboard(presenters.temperature)
                    }
                  >
                    {presenters.temperature}
                  </TagWithIcon>
                </C.VStack>
              </C.Grid>
            </CardContainer>
          </ContentVStack>
        </ContentVStack>
      }
      footerSlot={<Footer />}
    />
  );
};
