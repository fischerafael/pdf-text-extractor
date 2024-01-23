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
import { Button } from "@/client/components/Button";
import { TagHour } from "@/client/components/TagHour";

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
                onClick={controllers.onSubDate}
                size="sm"
              />
              <Text w="full" textAlign="center">
                {presenters.date}
              </Text>
              <IconButton
                icon={<Icon.HiChevronRight color="white" />}
                aria-label="Next Day"
                borderRadius="full"
                onClick={controllers.onAddDate}
                size="sm"
              />
            </C.HStack>

            <C.VStack w="full" spacing="0" shadow="md">
              {presenters.tasks?.data.map((task) => (
                <C.VStack
                  bg="white"
                  p="4"
                  w="full"
                  align="flex-start"
                  spacing="8"
                  key={task.id}
                  border="1px"
                  borderColor="gray.100"
                >
                  <Text>{task.details.task}</Text>

                  <C.HStack w="full" spacing="4" justify="space-between">
                    <C.HStack w="full" spacing="2">
                      <TagHour>{task.details.duration} h</TagHour>
                      <Tag py="0" hasIconLeft={false}>
                        {task.details.category}
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
                      isLoading={presenters.isLoading}
                      onClick={() => controllers.onRemove(task.id)}
                    />
                  </C.HStack>
                </C.VStack>
              ))}
            </C.VStack>

            <C.HStack w="full" pb="8">
              <TagHour>Tasks: {presenters.tasks?.count}</TagHour>
              <TagHour>Duration: {presenters.totalTime} h</TagHour>
            </C.HStack>

            <C.VStack w="full">
              <InputTextArea
                label="New Task"
                value={presenters.task}
                onChange={(e) =>
                  controllers.onChangeState("task", e.target.value)
                }
              />
              <C.HStack w="full" spacing="8" pb="4">
                <InputNumber
                  min={0}
                  max={24}
                  step={0.25}
                  label="Duration (h)"
                  value={presenters.duration}
                  onChange={(value) =>
                    controllers.onChangeState("duration", value)
                  }
                />
                <InputSelect
                  options={presenters.optionsCategories}
                  label="Category"
                  value={presenters.category}
                  onChange={(e) =>
                    controllers.onChangeState("category", e.target.value)
                  }
                />
              </C.HStack>
              <Button
                isDisabled={presenters.isDisabled}
                alignSelf="flex-end"
                onClick={controllers.onSubmit}
                isLoading={presenters.isLoading}
              >
                Add
              </Button>
            </C.VStack>
          </C.VStack>
        </C.VStack>
      }
    />
  );
};
