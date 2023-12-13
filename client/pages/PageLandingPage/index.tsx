import { Button } from "@/client/components/Button";
import { Footer } from "@/client/components/Footer";
import { Header } from "@/client/components/Header";
import { Image } from "@/client/components/HeroImage";
import { HeroSection } from "@/client/components/HeroSection";
import { LinksContainer } from "@/client/components/LinksContainer";
import { Logo } from "@/client/components/Logo";
import { ContainerPagePublic } from "@/client/components/PublicPageContainer";
import { usePageLandingPage } from "./hook";

export const PageLandingPage = () => {
  const { controllers } = usePageLandingPage();

  return (
    <ContainerPagePublic>
      <Header
        actionSlot={<Button onClick={controllers.handleLogIn}>Sign In</Button>}
        logoSlot={<Logo />}
        linksSlot={<LinksContainer />}
      />
      <HeroSection
        headline="Guildhawk's Prompt Manager"
        subHeadline="Supercharge Your Workflow with AI: Access our Library of Professional Prompts."
        ctaSlot={
          <Button onClick={controllers.handleLogIn} size="lg">
            Sign In
          </Button>
        }
        heroVisualSlot={
          <Image heroImage={"/PROMPT-MANAGER-IMAGE.png"} borderRadius={"16"} />
        }
      />
      <Footer />
    </ContainerPagePublic>
  );
};
