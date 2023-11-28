import React from "react";
import * as C from "@chakra-ui/react";

export interface ImageProps {
  heroImage: string;
}

export const Image = ({ heroImage }: ImageProps) => {
  return <C.Image objectFit="cover" src={heroImage} />;
};
