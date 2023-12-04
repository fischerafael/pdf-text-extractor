import { Button } from "@/client/components/Button";
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
          logoSlot={<C.Avatar />}
          linksSlot={<LinksContainer />}
          actionSlot={<Button>Log Out</Button>}
          isDisplayLinksOnWeb={false}
        />
      }
    />
  );
};

export default index;
