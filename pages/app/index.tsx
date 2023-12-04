import { Button } from "@/client/components/Button";
import { Header } from "@/client/components/Header";
import { HeaderLinks } from "@/client/components/HeaderLinks";
import { Logo } from "@/client/components/Logo";
import { DashboardTemplate } from "@/client/components/pages/DashboardTemplate";
import * as C from "@chakra-ui/react";

const index = () => {
  return (
    <DashboardTemplate
      logoSlot={<Logo />}
      headerSlot={
        <Header
          logoSlot={<C.Avatar />}
          linksSlot={<HeaderLinks />}
          actionSlot={<Button>Log Out</Button>}
          isDisplayLinksOnWeb={false}
        />
      }
    />
  );
};

export default index;
