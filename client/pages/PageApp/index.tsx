import { ContentVStack } from "@/client/components/ContentVStack";
import { DashboardTemplate } from "@/client/components/DashboardTemplate";
import { HeaderAppFactory } from "@/client/components/HeaderFactory";
import { InputText } from "@/client/components/InputText";
import { LinksContainerWithIcons } from "@/client/components/LinksContainerWithIcons";
import { Logo } from "@/client/components/Logo";
import { Text } from "@/client/components/Text";
import { usePageApp } from "./hook";
import * as C from "@chakra-ui/react";
import * as Icon from "react-icons/hi";
import { IconButton } from "@/client/components/IconButton";
import { InputNumber } from "@/client/components/InputNumber";
import { InputSelect } from "@/client/components/InputSelect";
import { InputTextArea } from "@/client/components/InputTextArea";
import { Tag } from "@/client/components/Tag";

export const PageApp = () => {
  const { controllers, presenters } = usePageApp();

  return (
    <DashboardTemplate
      logoSlot={<Logo />}
      linksSlot={<LinksContainerWithIcons />}
      headerSlot={<HeaderAppFactory />}
      mainSlot={
        <C.VStack w="full" align="center" p="8">
          <C.VStack w="full" maxW="container.sm" align="flex-start" gap="8">
            <C.HStack w="full">
              <IconButton
                icon={<Icon.HiChevronLeft color="white" />}
                aria-label="Previous Day"
                borderRadius="full"
              />
              <Text variant="h2" w="full" textAlign="center">
                22/01/2024
              </Text>
              <IconButton
                icon={<Icon.HiChevronRight color="white" />}
                aria-label="Next Day"
                borderRadius="full"
              />
            </C.HStack>

            <C.VStack w="full">
              <C.VStack
                bg="white"
                p="4"
                border="1px"
                borderColor="gray.200"
                w="full"
                align="flex-start"
                spacing="8"
                shadow="md"
              >
                <Text>Completar esse todo list</Text>

                <C.HStack w="full" spacing="4" justify="space-between">
                  <C.HStack w="full" spacing="2">
                    <Tag
                      bg="transparent"
                      border="1px"
                      color="purple.600"
                      borderColor="purple.600"
                      py="0"
                      hasIconLeft={false}
                    >
                      0.5 h
                    </Tag>
                    <Tag py="0" hasIconLeft={false}>
                      Design
                    </Tag>
                  </C.HStack>
                  <IconButton
                    icon={<Icon.HiOutlineX color="purple.600" />}
                    aria-label="Remove"
                    bg="transparent"
                    borderRadius="full"
                    border="1px"
                    borderColor="purple.600"
                    w="6"
                    h="6"
                  />
                </C.HStack>
              </C.VStack>
            </C.VStack>

            <C.VStack w="full">
              <InputTextArea label="New Task" />
              <C.HStack w="full" spacing="8">
                <InputNumber
                  min={0}
                  max={24}
                  step={0.25}
                  label="Duration (h)"
                />
                <InputSelect label="Category" />
              </C.HStack>
            </C.VStack>
          </C.VStack>
        </C.VStack>
      }
    />
  );
};
