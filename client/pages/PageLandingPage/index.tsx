import React from "react";
import * as C from "@chakra-ui/react";
import { Header } from "@/client/components/Header";
import { Logo } from "@/client/components/Logo";
import { LinksContainer } from "@/client/components/LinksContainer";
import { HeroSection } from "@/client/components/HeroSection";
import { Button } from "@/client/components/Button";
import { Image } from "@/client/components/HeroImage";
import { CompaniesCarousel } from "@/client/components/CompaniesCarousel";
import { FeatureSectionFactory } from "@/client/components/FeatureSectionFactory";
import { CardListContainer } from "@/client/components/CardsListContainer";
import { PricingCard } from "@/client/components/CardPricing";
import { Footer } from "@/client/components/Footer";
import { usePageLandingPage } from "./hook";

export const PageLandingPage = () => {
  const { controllers } = usePageLandingPage();

  return (
    <C.VStack w="full" spacing="8" px="8">
      <Header
        actionSlot={<Button onClick={controllers.handleLogIn}>Sign In</Button>}
        logoSlot={<Logo />}
        linksSlot={<LinksContainer />}
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
      />

      <Footer />
    </C.VStack>
  );
};
