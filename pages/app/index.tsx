import { Avatar } from "@/client/components/Avatar";
import { Button } from "@/client/components/Button";
import { Footer } from "@/client/components/Footer";
import { Header } from "@/client/components/Header";
import { InputNumber } from "@/client/components/InputNumber";
import { InputText } from "@/client/components/InputText";
import { LinksContainer } from "@/client/components/LinksContainer";
import { LinksContainerWithIcons } from "@/client/components/LinksContainerWithIcons";
import { Logo } from "@/client/components/Logo";
import { DashboardTemplate } from "@/client/components/pages/DashboardTemplate";

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
      mainSlot={
        <>
          <InputText label="testing" helpText="test" />
          <InputNumber label="testing" helpText="test" />
        </>
      }
      footerSlot={<Footer />}
    />
  );
};

export default index;
