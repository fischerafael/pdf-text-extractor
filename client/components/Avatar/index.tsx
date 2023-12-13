import React from "react";
import * as C from "@chakra-ui/react";
import { theme } from "@/client/config/theme";

interface AvatarProps {
  src?: string;
  title: string;
  subTitle?: string;
}

export const Avatar = (props: AvatarProps) => {
  return (
    <C.HStack spacing="4">
      <C.Avatar
        bg={`${theme.mainColour}`}
        color="white"
        src={props.src}
        name={props.title}
        size="sm"
      />
      <C.VStack spacing="0" align="flex-start">
        <C.Text lineHeight="1" fontWeight="medium">
          {props.title}
        </C.Text>
        {props.subTitle && <C.Text fontSize="xs">{props.subTitle}</C.Text>}
      </C.VStack>
    </C.HStack>
  );
};
