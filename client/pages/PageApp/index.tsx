import { ContentVStack } from "@/client/components/ContentVStack";
import { DashboardTemplate } from "@/client/components/DashboardTemplate";
import { HeaderAppFactory } from "@/client/components/HeaderFactory";
import { InputText } from "@/client/components/InputText";
import { LinksContainerWithIcons } from "@/client/components/LinksContainerWithIcons";
import { Logo } from "@/client/components/Logo";
import { Text, TextTitleMain } from "@/client/components/Text";
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
import { Modal } from "@/client/components/Modal";
import { theme } from "@/client/config/theme";
import { formatColorTone } from "../PageAppCategories/hook";

export const PageApp = () => {
  const { controllers, presenters } = usePageApp();

  return (
    <DashboardTemplate
      logoSlot={<Logo />}
      linksSlot={<LinksContainerWithIcons />}
      headerSlot={<HeaderAppFactory />}
      mainSlot={
        <C.VStack w="full" align="center" p="8">
          <C.VStack
            w="full"
            maxW={theme.width.container.regular}
            align="flex-start"
            gap="4"
          >
            <C.HStack w="full" justify="space-between">
              <IconButton
                icon={<Icon.HiChevronLeft color="white" />}
                aria-label="Previous Day"
                borderRadius={theme.border.radius.regular}
                onClick={controllers.onSubDate}
                size="sm"
              />
              <TextTitleMain>{presenters.date}</TextTitleMain>
              <IconButton
                icon={<Icon.HiChevronRight color="white" />}
                aria-label="Next Day"
                borderRadius={theme.border.radius.regular}
                onClick={controllers.onAddDate}
                size="sm"
              />
            </C.HStack>

            <C.VStack
              w="full"
              spacing="0"
              shadow={theme.shadow.regular}
              border="1px"
              borderColor={theme.border.color}
            >
              {presenters.tasks?.data.map((task) => {
                const TASK_ID = task.id;

                return (
                  <C.VStack
                    bg="white"
                    p="4"
                    w="full"
                    align="flex-start"
                    spacing="8"
                    key={task.id}
                    borderBottom="1px"
                    borderColor={theme.border.color}
                  >
                    <Text
                      onClick={() => {
                        console.log("[innput state] [taskId]", TASK_ID);
                        controllers.onOpenEdit(
                          TASK_ID,
                          task.details.task,
                          task.details.duration,
                          task.details.category
                        );
                      }}
                      cursor={"pointer"}
                    >
                      {task.details.task}
                    </Text>

                    <C.HStack w="full" spacing="4" justify="space-between">
                      <TagHour>{task.id}</TagHour>
                      <C.HStack spacing="4">
                        <TagHour>{task.details.duration} h</TagHour>
                        <Tag py="0" hasIconLeft={false}>
                          {task.details.category}
                        </Tag>
                        <IconButton
                          icon={<Icon.HiOutlineX color={theme.color.primary} />}
                          aria-label="Remove"
                          bg="transparent"
                          borderRadius={theme.border.radius.regular}
                          border="1px"
                          borderColor={theme.border.color}
                          w="6"
                          h="6"
                          isLoading={presenters.isLoading}
                          onClick={() => controllers.onRemove(TASK_ID)}
                        />
                      </C.HStack>
                    </C.HStack>

                    {/* EDIT MODAL */}

                    <Modal
                      isOpen={presenters.isOpenEditModal}
                      onClose={controllers.onCloseEdit}
                    >
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
                            bg={presenters.inputBgColor}
                            value={presenters.category}
                            onChange={(e) =>
                              controllers.onChangeState(
                                "category",
                                e.target.value
                              )
                            }
                          />
                        </C.HStack>
                        <Button
                          isDisabled={presenters.isDisabled}
                          alignSelf="flex-end"
                          onClick={controllers.onEditTask}
                          isLoading={presenters.isLoading}
                        >
                          Save
                        </Button>
                      </C.VStack>
                    </Modal>
                  </C.VStack>
                );
              })}
            </C.VStack>

            <C.HStack w="full" pb="8" justify="flex-end">
              <TagHour>Tasks: {presenters.tasks?.count}</TagHour>
              <TagHour>Duration: {presenters.totalTime} h</TagHour>
            </C.HStack>

            {/* INPUTS */}

            {!presenters.isOpenEditModal && (
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
                    bg={presenters.inputBgColor}
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
            )}
          </C.VStack>
        </C.VStack>
      }
    />
  );
};
