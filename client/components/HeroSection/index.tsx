import { Header } from "../Header";
import { HeaderAction } from "../HeaderAction";
import { HeaderHorizontalLinks } from "../HeaderHorizontalLinks";
import { Logo } from "../Logo";

interface HeroSectionProps {
  headline?: string;
  subHeadline?: string;
  ctaSlot?: React.ReactNode;
  heroImg?: string;
}

export const HeroSection = ({}: HeroSectionProps) => {
  return (
    <Header
      actionSlot={<HeaderAction />}
      logoSlot={<Logo />}
      linksSlot={<HeaderHorizontalLinks />}
    />
  );
};
