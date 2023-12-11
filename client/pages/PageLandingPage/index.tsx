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
import { CardContainer } from "@/client/components/CardsContainer";
import { PricingCard } from "@/client/components/PricingCard";
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
      <CompaniesCarousel
        logos={[
          "https://www.guildhawk.com/hs-fs/hubfs/image%20(1).png?width=200&height=46&name=image%20(1).png",
          "https://static.nike.com.br/v10-299-3/images/brands/logo.svg",
          "https://conteudo.imguol.com.br/c/home/layout/vueland/icons/brand/uol-logo-full.svg?v7",
          "data:image/png;base64,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",
          "https://www.condor.com.br/assets/images/logo.svg",
          "https://logosmarcas.net/wp-content/plugins/psn-pagespeed-ninja/ress/s/img/wp-content/uploads/2020/04/Puma-Logo-650x366.png.webp",
        ]}
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
      <CardContainer>
        <PricingCard
          plan="Premium"
          heading="£99 / consultation"
          actionSlot={<Button>Learn More</Button>}
          subHeading="Book a consultation call to discuss and seek advice on your tax queries."
          features={[
            {
              id: 1,
              description: "30 minute video or telephone call",
            },
            {
              id: 2,
              description: "One-on-one call with a dedicated accountant",
            },
            {
              id: 3,
              description: "Post call summary",
            },
          ]}
        />
      </CardContainer>
      <Footer />
    </C.VStack>
  );
};