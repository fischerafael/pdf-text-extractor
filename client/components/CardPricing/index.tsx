import React from "react";
import * as C from "@chakra-ui/react";
import * as Icon from "react-icons/hi";
import { theme } from "@/client/config/theme";
import { CardContainer } from "../CardContainer";

interface PricingCardProps {
  plan?: string;
  heading?: string;
  subHeading?: string;
  features?: { id: number; description: string }[];
  actionSlot?: React.ReactNode;
}

export const PricingCard = (props: PricingCardProps) => {
  return (
    <CardContainer>
      <C.Tag colorScheme={theme.color.primary}>{props.plan}</C.Tag>
      <C.Heading py="4" fontSize="4xl" color={theme.color.primary}>
        {props.heading}
      </C.Heading>
      <C.Text fontFamily={theme.font.family}>{props.subHeading}</C.Text>
      <br />
      {props.features?.length &&
        props.features.map((feature) => (
          <C.HStack key={feature.id}>
            <C.Icon
              color={`${theme.color.primary}`}
              as={Icon.HiOutlineCheckCircle}
            />
            <C.Text fontFamily={theme.font.family}>
              {feature.description}
            </C.Text>
          </C.HStack>
        ))}
      <br />
      {props.actionSlot}
    </CardContainer>
  );
};
