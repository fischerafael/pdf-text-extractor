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
  renderFirstOnMobile?: "left" | "right";
}

export const FeatureSectionFactory = ({
  heroImage,
  imagePosition,
  renderFirstOnMobile = "left",
  ...rest
}: FeatureSectionFactoryProps) => {
  if (imagePosition === "left") {
    return (
      <FeatureSectionContainer
        renderFirstOnMobile={renderFirstOnMobile}
        leftSlot={<Image heroImage={heroImage} />}
        rightSlot={<FeatureSectionContent {...rest} />}
      />
    );
  }
  return (
    <FeatureSectionContainer
      renderFirstOnMobile={renderFirstOnMobile}
      leftSlot={<FeatureSectionContent {...rest} />}
      rightSlot={<Image heroImage={heroImage} />}
    />
  );
};
