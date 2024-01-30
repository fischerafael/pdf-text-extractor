import { Button } from "@/client/components/Button";
import { DashboardTemplate } from "@/client/components/DashboardTemplate";
import { HeaderAppFactory } from "@/client/components/HeaderFactory";
import { LinksContainerWithIcons } from "@/client/components/LinksContainerWithIcons";
import { Logo } from "@/client/components/Logo";
import { TagHour } from "@/client/components/TagHour";
import { Text } from "@/client/components/Text";
import * as C from "@chakra-ui/react";
import * as Icon from "react-icons/hi";
import { usePageAppReports } from "./hook/usePageAppReports";
import { InputSelect } from "@/client/components/InputSelect";
import { IconButton } from "@/client/components/IconButton";

export const PageAppReports = () => {
  const { controllers, presenters } = usePageAppReports();

  return (
    <DashboardTemplate
      logoSlot={<Logo />}
      linksSlot={<LinksContainerWithIcons />}
      headerSlot={<HeaderAppFactory />}
      mainSlot={
        <C.VStack w="full" align="center" p="8">
          <C.VStack w="full" maxW="container.sm" align="flex-start" gap="8">
            <C.HStack w="full" justify="space-between">
              <C.HStack w="full">
                <Text fontSize="xl">Last 7 Days</Text>
                <TagHour>{presenters.stats.totalTasks} tasks</TagHour>
                <TagHour>{presenters.stats.time} hours</TagHour>
              </C.HStack>

              <Button>Download CSV</Button>
            </C.HStack>

            <C.HStack align="flex-start" w="full" justify="space-between">
              <Text fontSize="xl" w="full">
                Client
              </Text>
              <InputSelect
                options={presenters.clientOptions}
                label="Select a Client"
                value={presenters.selectedClient}
                onChange={(e) => controllers.onSelectClient(e.target.value)}
              />
            </C.HStack>

            {presenters.selectedClientData?.details && (
              <C.HStack
                w="full"
                bg="white"
                border="1px"
                borderColor="gray.200"
                p="8"
                spacing="4"
                align="flex-start"
                color="purple.600"
                justify="space-between"
              >
                <C.Avatar
                  name={presenters.selectedClientData?.details.name}
                  src={presenters.selectedClientData?.details.avatar}
                  bg="purple.600"
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
                  borderColor="gray.200"
                  p="8"
                  spacing="4"
                  align="flex-start"
                  color="purple.600"
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
    borderColor="gray.200"
    cursor="pointer"
    onClick={controllers.getLastWeekData}
  >
    <C.VStack w="full" align="flex-start">
      <C.Icon
        w="6"
        h="6"
        color="purple.600"
        as={Icon.HiOutlineDocumentReport}
      />
      <Text>Last Week</Text>
    </C.VStack>
    <C.Icon w="4" h="4" color="purple.600" as={Icon.HiOutlineChevronRight} />
  </C.HStack>
</C.VStack>; */
}
