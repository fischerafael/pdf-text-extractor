import React from "react";
import * as C from "@chakra-ui/react";
import { IconButton } from "../IconButton";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

export const CompaniesCarousel = () => {
  return (
    <C.HStack>
      <C.Button>
        <IconButton aria-label="left" icon={<HiOutlineChevronLeft />} />
        <IconButton
          colorScheme="purple"
          aria-label="right"
          icon={<HiOutlineChevronRight color="red" />}
        />
      </C.Button>
    </C.HStack>
  );
};
