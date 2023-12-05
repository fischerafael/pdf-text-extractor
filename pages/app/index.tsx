import { Avatar } from "@/client/components/Avatar";
import { Button } from "@/client/components/Button";
import { Footer } from "@/client/components/Footer";
import { Header } from "@/client/components/Header";
import { LinksContainer } from "@/client/components/LinksContainer";
import { LinksContainerWithIcons } from "@/client/components/LinksContainerWithIcons";
import { Logo } from "@/client/components/Logo";
import { DashboardTemplate } from "@/client/components/pages/DashboardTemplate";
import * as C from "@chakra-ui/react";

const index = () => {
  return (
    <DashboardTemplate
      logoSlot={<Logo />}
      linksSlot={<LinksContainerWithIcons />}
      headerSlot={
        <Header
          logoSlot={
            <Avatar title="Rafael Fischer" subTitle="rafael@gmail.com" />
          }
          linksSlot={<LinksContainer />}
          actionSlot={<Button>Log Out</Button>}
          isDisplayLinksOnWeb={false}
        />
      }
      mainSlot={<div>hi</div>}
      footerSlot={<Footer />}
    />
  );
};

export default index;
