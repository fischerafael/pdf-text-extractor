import { Button } from "@/client/components/Button";
import { DashboardTemplate } from "@/client/components/DashboardTemplate";
import { HeaderAppFactory } from "@/client/components/HeaderFactory";
import { InputText } from "@/client/components/InputText";
import { LinksContainerWithIcons } from "@/client/components/LinksContainerWithIcons";
import { Logo } from "@/client/components/Logo";
import { Tag } from "@/client/components/Tag";
import { TextTitleMain } from "@/client/components/Text";
import { theme } from "@/client/config/theme";
import * as C from "@chakra-ui/react";
import { formatColorTone, usePageAppCategories } from "./hook";
import { InputSelect } from "@/client/components/InputSelect";

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
              <C.Grid
                w="full"
                columnGap="4"
                rowGap="2"
                templateColumns={["1fr", "2fr 1fr"]}
              >
                <InputText
                  label="New Category"
                  value={presenters.title}
                  onChange={(e) =>
                    controllers.onChangeInputCategory("title", e.target.value)
                  }
                />
                <InputSelect
                  bg={formatColorTone(presenters.color)}
                  label="Color"
                  value={presenters.color}
                  onChange={(e) =>
                    controllers.onChangeInputCategory("color", e.target.value)
                  }
                  options={presenters.optionsColors}
                />
              </C.Grid>

              <Button
                variant="outline"
                color={theme.color.primary}
                borderColor={theme.border.color}
                bg="transparent"
                onClick={controllers.createCategory}
                isLoading={presenters.isLoading}
                isDisabled={!presenters.isEnabled}
              >
                Add
              </Button>
            </C.HStack>

            {!presenters.isLoading && (
              <C.HStack wrap="wrap" gap="2">
                {presenters.categories.map((cat) => (
                  <Tag
                    key={cat.id}
                    onClick={() => controllers.removeCategory(cat.id)}
                    bg={formatColorTone(cat.details.color)}
                    color="gray.600"
                  >
                    {cat.details.title}
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
