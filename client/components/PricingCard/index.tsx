import React from "react";
import * as C from "@chakra-ui/react";
import * as Icon from "react-icons/hi";
import { theme } from "@/client/config/theme";

interface PricingCardProps {
  plan?: string;
  heading?: string;
  subHeading?: string;
  features?: { id: number; description: string }[];
  actionSlot?: React.ReactNode;
}

export const PricingCard = (props: PricingCardProps) => {
  return (
    <C.VStack
      w="full"
      align="flex-start"
      p="8"
      borderRadius="16"
      border="solid"
      borderWidth="1px"
      borderColor={`${theme.accentColour}.200`}
      cursor="pointer"
      bg={`${theme.accentColour}.50`}
      transition="0.5s"
      _hover={{ bg: `${theme.accentColour}.100` }}
    >
      <C.Tag colorScheme={theme.accentColour}>{props.plan}</C.Tag>
      <C.Heading py="4" fontSize="4xl" color={theme.mainColour}>
        {props.heading}
      </C.Heading>
      <C.Text>{props.subHeading}</C.Text>
      <br />
      {props.features?.length &&
        props.features.map((feature) => (
          <C.HStack key={feature.id}>
            <C.Icon
              color={`${theme.accentColour}`}
              as={Icon.HiOutlineCheckCircle}
            />
            <C.Text>{feature.description}</C.Text>
          </C.HStack>
        ))}
      <br />
      {props.actionSlot}
    </C.VStack>
  );
};
