import { DashboardTemplate } from "@/client/components/DashboardTemplate";
import { HeaderAppFactory } from "@/client/components/HeaderFactory";
import { LinksContainerWithIcons } from "@/client/components/LinksContainerWithIcons";
import { Logo } from "@/client/components/Logo";
import * as C from "@chakra-ui/react";
import { Text } from "@/client/components/Text";
import { InputText } from "@/client/components/InputText";
import { usePageAppClientsClient } from "./hooks";
import { Button } from "@/client/components/Button";

export const PageAppClientsClient = () => {
  const { presenters, controllers } = usePageAppClientsClient();

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
            <Text variant="h1">New Client</Text>
            <Button onClick={controllers.handleCancel}>Cancel</Button>
          </C.HStack>
          <C.VStack w="full" maxW="container.sm" align="flex-start" gap="8">
            <C.VStack w="full" justify="center">
              <InputText
                label="Name"
                value={presenters.client.name}
                onChange={controllers.onChangeClient("name")}
              />
              <InputText
                label="Logo (Optional)"
                value={presenters.client.avatar}
                onChange={controllers.onChangeClient("avatar")}
              />
            </C.VStack>
            <Text variant="h1">Address</Text>
            <C.VStack w="full" justify="center">
              <InputText
                label="Address"
                value={presenters.address.address}
                onChange={controllers.onChangeAddress("address")}
              />
              <InputText
                label="City"
                value={presenters.address.city}
                onChange={controllers.onChangeAddress("city")}
              />
              <InputText
                label="Country"
                value={presenters.address.country}
                onChange={controllers.onChangeAddress("country")}
              />
              <InputText
                label="Postal Code"
                value={presenters.address.postalCode}
                onChange={controllers.onChangeAddress("postalCode")}
              />
            </C.VStack>
            <Text variant="h1">Main Contact</Text>
            <C.VStack w="full" justify="center">
              <InputText
                label="First Name"
                value={presenters.contactMain.firstName}
                onChange={controllers.onChangeContactMain("firstName")}
              />
              <InputText
                label="Last Name"
                value={presenters.contactMain.lastName}
                onChange={controllers.onChangeContactMain("lastName")}
              />
              <InputText
                label="Email"
                value={presenters.contactMain.email}
                onChange={controllers.onChangeContactMain("email")}
              />
              <InputText
                label="Role"
                value={presenters.contactMain.role}
                onChange={controllers.onChangeContactMain("role")}
              />
            </C.VStack>

            <Button
              isLoading={presenters.isLoading}
              alignSelf="flex-end"
              isDisabled={!presenters.isValid}
              onClick={controllers.handleCreateClient}
            >
              Save
            </Button>
          </C.VStack>
        </C.VStack>
      }
    />
  );
};
