import { Button } from "../../Button";
import { CompaniesCarousel } from "../../CompaniesCarousel";
import { FeatureSectionContainer } from "../../FeatureSectionContainer";
import { FeatureSectionContent } from "../../FeatureSectionContent";
import { FeatureSectionFactory } from "../../FeatureSectionFactory";
import { Header } from "../../Header";
import { HeaderAction } from "../../HeaderAction";
import { HeaderHorizontalLinks } from "../../HeaderHorizontalLinks";
import { Image } from "../../HeroImage";
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
          <Image
            heroImage={
              "https://supercriador.com/public/uploads/media/uuguZ8Twpzyhzh7VHmRFi8OKMZmFqGyoJhIYYwHb.png"
            }
          />
        }
      />
      <FeatureSectionFactory
        imagePosition="left"
        heroImage={
          "https://supercriador.com/public/uploads/media/uuguZ8Twpzyhzh7VHmRFi8OKMZmFqGyoJhIYYwHb.png"
        }
        heading={"Selecione o modelo"}
        content={
          "Veja como é fácil e rápido usar a Inteligência Artificial para criar, conteúdos para diversas aplicações, campanhas de vendas e marketing, e muito mais."
        }
        ctaSlot={<Button>Selecione</Button>}
      />
      <FeatureSectionFactory
        imagePosition="right"
        heroImage={
          "https://supercriador.com/public/uploads/media/uuguZ8Twpzyhzh7VHmRFi8OKMZmFqGyoJhIYYwHb.png"
        }
        heading={"Selecione o modelo"}
        content={
          "Veja como é fácil e rápido usar a Inteligência Artificial para criar, conteúdos para diversas aplicações, campanhas de vendas e marketing, e muito mais."
        }
        ctaSlot={<Button>Selecione</Button>}
      />
    </>
  );
};
