import { DashboardTemplate } from "@/client/components/DashboardTemplate";
import { HeaderAppFactory } from "@/client/components/HeaderFactory";
import { LinksContainerWithIcons } from "@/client/components/LinksContainerWithIcons";
import { Logo } from "@/client/components/Logo";
import * as C from "@chakra-ui/react";
import * as Icon from "react-icons/hi";
import { Text } from "@/client/components/Text";
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
            <Text fontSize="xl">Reports</Text>

            <C.VStack w="full" align="flex-start">
              <C.HStack
                w="full"
                bg="white"
                p="8"
                border="1px"
                borderColor="gray.200"
                cursor="pointer"
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
                <C.Icon
                  w="4"
                  h="4"
                  color="purple.600"
                  as={Icon.HiOutlineChevronRight}
                />
              </C.HStack>
            </C.VStack>
          </C.VStack>
        </C.VStack>
      }
    />
  );
};
