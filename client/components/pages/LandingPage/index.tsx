import { Header } from "../../Header";
import { HeaderAction } from "../../HeaderAction";
import { HeaderHorizontalLinks } from "../../HeaderHorizontalLinks";
import { HeroSection } from "../../HeroSection";
import { Logo } from "../../Logo";

export const LandingPage = () => {
  return (
    <>
      <Header
        actionSlot={<HeaderAction />}
        logoSlot={<Logo />}
        linksSlot={<HeaderHorizontalLinks />}
      />
      <HeroSection />
    </>
  );
};
