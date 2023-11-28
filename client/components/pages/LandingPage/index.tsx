import { Button } from "../../Button";
import { Header } from "../../Header";
import { HeaderAction } from "../../HeaderAction";
import { HeaderHorizontalLinks } from "../../HeaderHorizontalLinks";
import { HeroImage } from "../../HeroImage";
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
      <HeroSection
        headline="Foque no que importa nós cuidamos do resto"
        subHeadline="Queremos te dar mais tempo para se concentrar nas coisas que importam.
          O trabalho repetitivo tem matado lentamente a criatividade humana. Por
          isso, nosso SuperCriador irá trabalhar para você."
        ctaSlot={<Button size="lg">Comece</Button>}
        heroVisualSlot={
          <HeroImage
            heroImage={
              "https://supercriador.com/public/uploads/media/uuguZ8Twpzyhzh7VHmRFi8OKMZmFqGyoJhIYYwHb.png"
            }
          />
        }
      />
    </>
  );
};
