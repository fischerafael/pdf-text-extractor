import { Button } from "@/client/components/Button";
import { DashboardTemplate } from "@/client/components/DashboardTemplate";
import { HeaderAppFactory } from "@/client/components/HeaderFactory";
import { InputText } from "@/client/components/InputText";
import { LinksContainerWithIcons } from "@/client/components/LinksContainerWithIcons";
import { Logo } from "@/client/components/Logo";
import * as C from "@chakra-ui/react";
import { usePageAppCategories } from "./hook";
import { Tag } from "@/client/components/Tag";
import { Text, TextTitleMain } from "@/client/components/Text";
import { theme } from "@/client/config/theme";

export const PageAppCategories = () => {
  const { presenters, controllers } = usePageAppCategories();

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
            <TextTitleMain variant="h1">Categories</TextTitleMain>

            <C.HStack
              w="full"
              justify="space-between"
              spacing="4"
              align="flex-end"
            >
              <C.HStack w="full">
                <InputText
                  label="New Category"
                  value={presenters.inputCategory}
                  onChange={(e) =>
                    controllers.onChangeInputCategory(e.target.value)
                  }
                />
              </C.HStack>

              <Button
                variant="outline"
                color={theme.color.primary}
                borderColor={theme.border.color}
                bg="transparent"
                onClick={controllers.createCategory}
                isLoading={presenters.isLoading}
              >
                Add
              </Button>
            </C.HStack>

            {!presenters.isLoading && (
              <C.HStack wrap="wrap" gap="2">
                {presenters.existingCategoryes.map((cat) => (
                  <Tag
                    key={cat.key}
                    onClick={() => controllers.removeCategory(cat.key)}
                  >
                    {cat.value}
                  </Tag>
                ))}
              </C.HStack>
            )}
          </C.VStack>
        </C.VStack>
      }
    />
  );
};
