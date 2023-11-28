import React from "react";
import * as C from "@chakra-ui/react";

export const HeroImage = ({ heroImage }: { heroImage: string }) => {
  return <C.Image objectFit="cover" src={heroImage} />;
};
