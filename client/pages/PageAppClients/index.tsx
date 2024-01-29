import { DashboardTemplate } from "@/client/components/DashboardTemplate";
import { HeaderAppFactory } from "@/client/components/HeaderFactory";
import { LinksContainerWithIcons } from "@/client/components/LinksContainerWithIcons";
import { Logo } from "@/client/components/Logo";
import * as C from "@chakra-ui/react";
import * as Icon from "react-icons/hi";
import { Text } from "@/client/components/Text";
import { usePageAppClients } from "./hooks/usePageAppClients";
import { TagHour } from "@/client/components/TagHour";
import { IconButton } from "@/client/components/IconButton";
import { Button } from "@/client/components/Button";

export const PageAppClients = () => {
  const { presenters, controllers } = usePageAppClients();
  return (
    <DashboardTemplate
      logoSlot={<Logo />}
      linksSlot={<LinksContainerWithIcons />}
      headerSlot={<HeaderAppFactory />}
      mainSlot={
        <C.VStack w="full" align="center" p="8">
          <C.HStack
            w="full"
            maxW="container.sm"
            justify="space-between"
            align="flex-start"
            gap="8"
          >
            <Text variant="h1">Clients ({presenters.count})</Text>
            <Button onClick={controllers.handleNavigateToAdd}>Add</Button>
          </C.HStack>
          <C.VStack
            w="full"
            justify="center"
            maxW="container.sm"
            py="8"
            spacing="0"
          >
            {presenters.clients.map((client) => (
              <C.HStack
                key={client.id}
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
                  name={client.details.name}
                  src={client.details.avatar}
                  bg="purple.600"
                  color="white"
                  size="sm"
                />
                <C.VStack align="flex-start" w="full" spacing="1">
                  <Text variant="h3" fontWeight="normal">
                    {client.details.name}
                  </Text>
                  <Text variant="xs">
                    {client.details.address}, {client.details.city},{" "}
                    {client.details.country}
                  </Text>
                  <TagHour>
                    {client.details.firstName} {client.details.lastName} (
                    {client.details.email})
                  </TagHour>
                </C.VStack>
                <IconButton
                  color="white"
                  isLoading={presenters.isLoading}
                  aria-label="Remove"
                  cursor="pointer"
                  onClick={() => controllers.handleDelete(client.id)}
                  icon={<Icon.HiOutlineX />}
                />
              </C.HStack>
            ))}
          </C.VStack>
        </C.VStack>
      }
    />
  );
};
