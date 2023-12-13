import React from "react";
import * as C from "@chakra-ui/react";

export interface ImageProps extends C.ImageProps {
  heroImage: string;
}

export const Image = ({ heroImage, ...props }: ImageProps) => {
  return <C.Image objectFit="cover" src={heroImage} {...props} />;
};
