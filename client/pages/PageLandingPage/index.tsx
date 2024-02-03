import { Button } from "@/client/components/Button";
import { Header } from "@/client/components/Header";
import { Image } from "@/client/components/HeroImage";
import { HeroSection } from "@/client/components/HeroSection";
import { LinksContainer } from "@/client/components/LinksContainer";
import { Logo } from "@/client/components/Logo";
import { ContainerPagePublic } from "@/client/components/PublicPageContainer";
import { usePageLandingPage } from "./hook";
import { theme } from "@/client/config/theme";

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
        headline="Very Simple Timesheets"
        subHeadline="Manage your timesheets in a very simple way."
        ctaSlot={
          <Button onClick={controllers.handleLogIn} size="lg">
            Sign In
          </Button>
        }
        heroVisualSlot={
          <Image
            heroImage={
              "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            borderTopRadius={"16"}
            h="400px"
            objectFit="cover"
            w="full"
            shadow={theme.shadow.regular}
          />
        }
      />
    </ContainerPagePublic>
  );
};
