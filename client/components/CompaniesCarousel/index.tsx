import React, { useState } from "react";
import * as C from "@chakra-ui/react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { theme } from "@/client/config/theme";

const logosArray = [
  "https://www.guildhawk.com/hs-fs/hubfs/image%20(1).png?width=200&height=46&name=image%20(1).png",
  "https://static.nike.com.br/v10-299-3/images/brands/logo.svg",
  "https://conteudo.imguol.com.br/c/home/layout/vueland/icons/brand/uol-logo-full.svg?v7",
  "data:image/png;base64,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",
  "https://www.condor.com.br/assets/images/logo.svg",
  "https://logosmarcas.net/wp-content/plugins/psn-pagespeed-ninja/ress/s/img/wp-content/uploads/2020/04/Puma-Logo-650x366.png.webp",
];

const getCurrentView = (logos: string[], centralIndex: number) => {
  const isLogosShorterOrEqual3 = logos.length <= 3;
  if (isLogosShorterOrEqual3) return logos;
  const isCentralIndex0 = centralIndex === 0;
  if (isCentralIndex0) {
    return [
      logos[logos.length - 1],
      logos[centralIndex],
      logos[centralIndex + 1],
    ];
  }
  const isCentralIndexLastElement = centralIndex === logos.length - 1;
  if (isCentralIndexLastElement) {
    return [logos[centralIndex - 1], logos[centralIndex], logos[0]];
  }
  return [
    logos[centralIndex - 1],
    logos[centralIndex],
    logos[centralIndex + 1],
  ];
};

export const CompaniesCarousel = ({
  logos = logosArray,
}: {
  logos?: string[];
}) => {
  const [centralIndex, setCentralIndex] = useState(0);

  const incrementIndex = () => {
    const updatedValue = centralIndex < logos.length - 1 ? centralIndex + 1 : 0;
    setCentralIndex(updatedValue);
  };

  const decrementIndex = () => {
    const updatedValue = centralIndex > 0 ? centralIndex - 1 : logos.length - 1;
    setCentralIndex(updatedValue);
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
            {currentView.map((logo, currentLogoIndex) => (
              <C.Image
                key={logo}
                style={{
                  filter: "saturate(0)",
                }}
                src={logo}
                h="32px"
                transition="0.5s"
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
