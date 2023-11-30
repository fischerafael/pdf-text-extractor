import React from "react";
import * as C from "@chakra-ui/react";
import { theme } from "@/client/config/theme";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

export const CompaniesCarouselContainer = ({
  title,
  children,
  increment,
  decrement,
}: {
  title?: string;
  children: React.ReactNode;
  increment: () => void;
  decrement: () => void;
}) => {
  return (
    <C.HStack w="full" justify="center" py="8">
      <C.VStack w="full" maxW="container.lg" spacing="16">
        {!!title && (
          <C.Heading fontSize="xl" color={theme.mainColour} fontWeight="medium">
            {title}
          </C.Heading>
        )}
        <C.HStack justify="space-between" w="full">
          <C.IconButton
            variant="transparent"
            aria-label="left"
            icon={<HiOutlineChevronLeft color={theme.mainColour} />}
            onClick={decrement}
          />
          {children}
          <C.IconButton
            variant="transparent"
            aria-label="right"
            icon={<HiOutlineChevronRight color={theme.mainColour} />}
            onClick={increment}
          />
        </C.HStack>
      </C.VStack>
    </C.HStack>
  );
};
