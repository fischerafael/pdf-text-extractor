import { FeatureSectionContainer } from "../FeatureSectionContainer";
import {
  FeatureSectionContent,
  FeatureSectionContentProps,
} from "../FeatureSectionContent";
import { Image, ImageProps } from "../HeroImage";

interface FeatureSectionFactoryProps
  extends ImageProps,
    FeatureSectionContentProps {
  imagePosition: "left" | "right";
}

export const FeatureSectionFactory = ({
  heroImage,
  imagePosition,
  ...rest
}: FeatureSectionFactoryProps) => {
  if (imagePosition === "left") {
    return (
      <FeatureSectionContainer
        leftSlot={<Image heroImage={heroImage} />}
        rightSlot={<FeatureSectionContent {...rest} />}
      />
    );
  }
  return (
    <FeatureSectionContainer
      leftSlot={<FeatureSectionContent {...rest} />}
      rightSlot={<Image heroImage={heroImage} />}
    />
  );
};
