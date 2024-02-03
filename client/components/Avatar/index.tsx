import { theme } from "@/client/config/theme";
import * as C from "@chakra-ui/react";
import { TextRegular, TextSubTitle } from "../Text";

interface AvatarProps {
  src?: string;
  title: string;
  subTitle?: string;
}

export const Avatar = (props: AvatarProps) => {
  return (
    <C.HStack spacing="2">
      <C.Avatar
        bg={`${theme.color.primary}`}
        color="white"
        src={props.src}
        name={props.title}
        size="xs"
      />
      <C.VStack spacing="0" align="flex-start">
        <TextSubTitle fontFamily={theme.font.family} lineHeight="1">
          {props.title}
        </TextSubTitle>
        {props.subTitle && (
          <TextRegular color={theme.color.light600}>
            {props.subTitle}
          </TextRegular>
        )}
      </C.VStack>
    </C.HStack>
  );
};
