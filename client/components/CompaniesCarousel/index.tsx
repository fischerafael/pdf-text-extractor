import React, { useState } from "react";
import * as C from "@chakra-ui/react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { theme } from "@/client/config/theme";

const logosArray = [
  "https://www.guildhawk.com/hs-fs/hubfs/image%20(1).png?width=200&height=46&name=image%20(1).png",
  "https://static.nike.com.br/v10-299-3/images/brands/logo.svg",
  "https://conteudo.imguol.com.br/c/home/layout/vueland/icons/brand/uol-logo-full.svg?v7",
  "https://www.guildhawk.com/hs-fs/hubfs/image%20(1).png?width=200&height=46&name=image%20(1).png",
  "https://static.nike.com.br/v10-299-3/images/brands/logo.svg",
  "https://conteudo.imguol.com.br/c/home/layout/vueland/icons/brand/uol-logo-full.svg?v7",
  "https://www.guildhawk.com/hs-fs/hubfs/image%20(1).png?width=200&height=46&name=image%20(1).png",
  "https://static.nike.com.br/v10-299-3/images/brands/logo.svg",
  "https://conteudo.imguol.com.br/c/home/layout/vueland/icons/brand/uol-logo-full.svg?v7",
];

const getCurrentView = (logos: string[], centralIndex: number) => {
  if (centralIndex > logos.length - 1) return logos.slice(0, 3);
  if (logos.length <= 3) return logos;
  if (centralIndex === 0) {
    return [logos[logos.length - 1], logos[0], logos[1]];
  }
  if (centralIndex === logos.length - 1) {
    return [logos[logos.length - 2], logos[logos.length - 1], logos[0]];
  }
  return logos.slice(0, 3);
};

export const CompaniesCarousel = ({
  logos = logosArray,
}: {
  logos?: string[];
}) => {
  const [centralIndex, setCentralIndex] = useState(0);

  console.log(centralIndex);
  // TODO - FIX THIS LOGIC

  const incrementIndex = () => {
    if (centralIndex === 0) {
      setCentralIndex(logos.length - 1);
    }
    setCentralIndex(centralIndex + 1);
  };

  const decrementIndex = () => {
    if (centralIndex > logos.length - 1) {
      setCentralIndex(0);
    }
    setCentralIndex(centralIndex - 1);
  };

  const currentView = getCurrentView(logos, centralIndex);

  return (
    <C.HStack w="full" justify="center" py="8">
      <C.VStack w="full" p="4" maxW="container.lg" spacing="8">
        <C.Heading fontSize="xl" color={theme.mainColour} fontWeight="medium">
          Trusted By
        </C.Heading>
        <C.HStack justify="space-between" w="full">
          <C.IconButton
            variant="transparent"
            aria-label="left"
            icon={<HiOutlineChevronLeft color={theme.mainColour} />}
            onClick={decrementIndex}
          />
          <C.HStack w="full" maxW="container.sm" justify="space-between">
            {currentView.map((logo) => (
              <C.Image
                style={{
                  filter: "saturate(0)",
                }}
                key={logo}
                src={logo}
                h="32px"
              />
            ))}
          </C.HStack>
          <C.IconButton
            variant="transparent"
            aria-label="right"
            icon={<HiOutlineChevronRight color={theme.mainColour} />}
            onClick={incrementIndex}
          />
        </C.HStack>
      </C.VStack>
    </C.HStack>
  );
};
