import { Button } from "@/client/components/Button";
import { DashboardTemplate } from "@/client/components/DashboardTemplate";
import { HeaderAppFactory } from "@/client/components/HeaderFactory";
import { LinksContainerWithIcons } from "@/client/components/LinksContainerWithIcons";
import { Logo } from "@/client/components/Logo";
import { TagHour } from "@/client/components/TagHour";
import { Text } from "@/client/components/Text";
import * as C from "@chakra-ui/react";
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
          <C.VStack w="full" maxW="container.sm" align="flex-start" gap="8">
            <C.HStack w="full" justify="space-between">
              <C.HStack>
                <Text fontSize="xl">Last 7 Days</Text>
                <TagHour>{presenters.stats.totalTasks} tasks</TagHour>
                <TagHour>{presenters.stats.time} hours</TagHour>
              </C.HStack>

              <Button>Download CSV</Button>
            </C.HStack>
            <C.VStack w="full" spacing="8">
              {presenters.tasks?.map((task) => (
                <C.VStack key={task.dayOfTheWeek} w="full" align="flex-start">
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
