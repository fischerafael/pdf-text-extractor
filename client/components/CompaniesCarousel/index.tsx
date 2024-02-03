import * as C from "@chakra-ui/react";
import { useState } from "react";
import { CompaniesCarouselContainer } from "../CompaniesCarouselContainer";
import { theme } from "@/client/config/theme";

const getCurrentView = (logos: string[] = [], centralIndex: number = 0) => {
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
  const defaultLogos = logos.slice(centralIndex - 1, centralIndex + 2);
  return defaultLogos;
};

export const CompaniesCarousel = ({ logos = [] }: { logos?: string[] }) => {
  const [centralIndex, setCentralIndex] = useState(0);

  const incrementIndex = () => {
    const updatedValue = centralIndex < logos.length - 1 ? centralIndex + 1 : 0;
    setCentralIndex(updatedValue);
  };

  const decrementIndex = () => {
    const updatedValue = centralIndex > 0 ? centralIndex - 1 : logos.length - 1;
    setCentralIndex(updatedValue);
  };

  if (!logos.length) return null;

  return (
    <CompaniesCarouselContainer
      title={"Trusted By"}
      increment={incrementIndex}
      decrement={decrementIndex}
    >
      <CarouselList logos={logos} centralIndex={centralIndex} />
      <SingleLogo logos={logos} centralIndex={centralIndex} />
    </CompaniesCarouselContainer>
  );
};

interface LogosRendererProps {
  logos: string[];
  centralIndex: number;
}

const CarouselList = ({ logos, centralIndex }: LogosRendererProps) => {
  const currentLogos = getCurrentView(logos, centralIndex);
  return (
    <C.HStack
      display={["none", "none", "flex"]}
      w="full"
      maxW={theme.width.container.regular}
      justify="space-between"
      px="16"
    >
      {currentLogos.map((logo) => (
        <LogoImage key={logo} url={logo} />
      ))}
    </C.HStack>
  );
};

const SingleLogo = ({ logos, centralIndex }: LogosRendererProps) => {
  const renderedLogo = logos[centralIndex];
  return (
    <C.HStack
      display={["flex", "flex", "none"]}
      w="full"
      maxW={theme.width.container.regular}
      justify="center"
    >
      <LogoImage url={renderedLogo} />
    </C.HStack>
  );
};

const LogoImage = ({ url }: { url: string }) => {
  return (
    <C.Image
      style={{
        filter: "saturate(0)",
      }}
      src={url}
      h="32px"
      transition="0.5s"
    />
  );
};
