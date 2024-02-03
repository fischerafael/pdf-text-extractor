import { Button } from "@/client/components/Button";
import { DashboardTemplate } from "@/client/components/DashboardTemplate";
import { HeaderAppFactory } from "@/client/components/HeaderFactory";
import { IconButton } from "@/client/components/IconButton";
import { InputNumber } from "@/client/components/InputNumber";
import { InputSelect } from "@/client/components/InputSelect";
import { LinksContainerWithIcons } from "@/client/components/LinksContainerWithIcons";
import { Logo } from "@/client/components/Logo";
import { TagHour } from "@/client/components/TagHour";
import {
  Text,
  TextTitleMain,
  TextTitleSecondary,
} from "@/client/components/Text";
import { theme } from "@/client/config/theme";
import * as C from "@chakra-ui/react";
import { CSVLink } from "react-csv";
import * as Icon from "react-icons/hi";
import { usePageAppReports } from "./hook/usePageAppReports";

export const PageAppReports = () => {
  const { controllers, presenters } = usePageAppReports();

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
            gap="8"
          >
            <C.HStack w="full" justify="space-between">
              <C.HStack w="full">
                <TextTitleMain>Last 7 Days</TextTitleMain>
                <TagHour>{presenters.stats.totalTasks} tasks</TagHour>
                <TagHour>{presenters.stats.time} hours</TagHour>
              </C.HStack>

              <CSVLink
                enclosingCharacter=""
                filename="Report"
                data={presenters.repportData}
              >
                <Button isDisabled={!presenters.isDownloadEnabled}>
                  Download CSV
                </Button>
              </CSVLink>
            </C.HStack>

            <C.HStack align="flex-start" w="full" justify="space-between">
              <TextTitleSecondary>Client</TextTitleSecondary>
              <C.HStack spacing="4">
                <InputNumber
                  minW="120px"
                  label="Period (Days Ago)"
                  value={presenters.selectedDaysAgo}
                  onChange={(value) => controllers.onSelectDays(value)}
                  min={1}
                  max={7}
                />
                <InputSelect
                  minW="120px"
                  options={presenters.clientOptions}
                  label="Select a Client"
                  value={presenters.selectedClient}
                  onChange={(e) => controllers.onSelectClient(e.target.value)}
                />
              </C.HStack>
            </C.HStack>

            {presenters.selectedClientData?.details && (
              <C.HStack
                w="full"
                bg="white"
                border="1px"
                borderColor={theme.border.color}
                p="8"
                spacing="4"
                align="flex-start"
                color={theme.color.primary}
                justify="space-between"
              >
                <C.Avatar
                  name={presenters.selectedClientData?.details.name}
                  src={presenters.selectedClientData?.details.avatar}
                  bg={theme.color.primary}
                  color="white"
                  size="sm"
                />
                <C.VStack align="flex-start" w="full" spacing="1">
                  <Text variant="h3" fontWeight="normal">
                    {presenters.selectedClientData?.details.name}
                  </Text>
                  <Text variant="xs">
                    {presenters.selectedClientData?.details.address},{" "}
                    {presenters.selectedClientData?.details.city},{" "}
                    {presenters.selectedClientData?.details.country}
                  </Text>
                  <TagHour>
                    {presenters.selectedClientData?.details.firstName}{" "}
                    {presenters.selectedClientData?.details.lastName} (
                    {presenters.selectedClientData?.details.email})
                  </TagHour>
                </C.VStack>
                <IconButton
                  color="white"
                  aria-label="Remove"
                  cursor="pointer"
                  onClick={controllers.onDeselectClient}
                  icon={<Icon.HiOutlineX />}
                />
              </C.HStack>
            )}

            <C.VStack w="full" spacing="8">
              {presenters.tasks?.map((task) => (
                <C.VStack
                  key={task.dayOfTheWeek}
                  w="full"
                  bg="white"
                  border="1px"
                  borderColor={theme.border.color}
                  p="8"
                  spacing="4"
                  align="flex-start"
                  color={theme.color.primary}
                  justify="space-between"
                >
                  <C.HStack w="full" justify="space-between">
                    <Text variant="h3">{task.dayOfTheWeek}</Text>
                  </C.HStack>
                  <C.VStack w="full" align="flex-start">
                    {task.data.map((tk) => (
                      <Text key={tk.id}>{tk.details.task}</Text>
                    ))}
                  </C.VStack>
                </C.VStack>
              ))}
            </C.VStack>
          </C.VStack>
        </C.VStack>
      }
    />
  );
};

{
  /* <C.VStack w="full" align="flex-start">
  <C.HStack
    w="full"
    bg="white"
    p="8"
    border="1px"
    borderColor={theme.border.color}
    cursor="pointer"
    onClick={controllers.getLastWeekData}
  >
    <C.VStack w="full" align="flex-start">
      <C.Icon
        w="6"
        h="6"
        color={theme.color.primary}
        as={Icon.HiOutlineDocumentReport}
      />
      <Text>Last Week</Text>
    </C.VStack>
    <C.Icon w="4" h="4" color={theme.color.primary} as={Icon.HiOutlineChevronRight} />
  </C.HStack>
</C.VStack>; */
}
