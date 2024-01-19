import { Button } from "@/client/components/Button";
import { DashboardTemplate } from "@/client/components/DashboardTemplate";
import { HeaderAppFactory } from "@/client/components/HeaderFactory";
import { InputText } from "@/client/components/InputText";
import { LinksContainerWithIcons } from "@/client/components/LinksContainerWithIcons";
import { Logo } from "@/client/components/Logo";
import * as C from "@chakra-ui/react";
import { usePageAppCategories } from "./hook";
import { Tag } from "@/client/components/Tag";

export const PageAppCategories = () => {
  const { presenters, controllers } = usePageAppCategories();

  return (
    <DashboardTemplate
      logoSlot={<Logo />}
      linksSlot={<LinksContainerWithIcons />}
      headerSlot={<HeaderAppFactory />}
      mainSlot={
        <C.VStack w="full" align="center" p="8">
          <C.VStack w="full" maxW="container.sm" align="flex-start" gap="8">
            <C.Text fontSize="xl" color="purple.600">
              Categories
            </C.Text>

            <C.HStack
              w="full"
              justify="space-between"
              spacing="4"
              align="flex-end"
            >
              <InputText
                label="New Category"
                value={presenters.inputCategory}
                onChange={(e) =>
                  controllers.onChangeInputCategory(e.target.value)
                }
              />
              <Button
                variant="outline"
                color="purple.600"
                borderColor="purple.600"
                bg="transparent"
                onClick={controllers.createCategory}
                isLoading={presenters.isLoading}
              >
                Add
              </Button>
            </C.HStack>

            <C.HStack wrap="wrap" gap="2">
              <Tag>Vehicle</Tag>
              <Tag>Vehicle</Tag>
              <Tag>Vehicle</Tag>
              <Tag>Vehicle</Tag>
              <Tag>Vehicle</Tag>
            </C.HStack>
          </C.VStack>
        </C.VStack>
      }
    />
  );
};
