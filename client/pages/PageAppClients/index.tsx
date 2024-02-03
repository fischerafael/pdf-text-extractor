import { Button } from "@/client/components/Button";
import { DashboardTemplate } from "@/client/components/DashboardTemplate";
import { HeaderAppFactory } from "@/client/components/HeaderFactory";
import { IconButton } from "@/client/components/IconButton";
import { LinksContainerWithIcons } from "@/client/components/LinksContainerWithIcons";
import { Logo } from "@/client/components/Logo";
import { TagHour } from "@/client/components/TagHour";
import { Text, TextTitleMain } from "@/client/components/Text";
import { theme } from "@/client/config/theme";
import * as C from "@chakra-ui/react";
import * as Icon from "react-icons/hi";
import { usePageAppClients } from "./hooks/usePageAppClients";

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
            maxW={theme.width.container.regular}
            justify="space-between"
            align="flex-start"
            gap="8"
          >
            <TextTitleMain>Clients ({presenters.count})</TextTitleMain>
            <Button onClick={controllers.handleNavigateToAdd}>Add</Button>
          </C.HStack>
          <C.VStack
            w="full"
            justify="center"
            maxW={theme.width.container.regular}
            py="8"
            spacing="0"
          >
            {presenters.clients.map((client) => (
              <C.HStack
                key={client.id}
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
                  name={client.details.name}
                  src={client.details.avatar}
                  bg={theme.color.primary}
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
