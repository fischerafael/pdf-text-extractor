import { Avatar } from "@/client/components/Avatar";
import { Button } from "@/client/components/Button";
import { Footer } from "@/client/components/Footer";
import { Header } from "@/client/components/Header";
import { InputNumber } from "@/client/components/InputNumber";
import { InputSelect } from "@/client/components/InputSelect";
import { InputText } from "@/client/components/InputText";
import { InputTextArea } from "@/client/components/InputTextArea";
import { LinksContainer } from "@/client/components/LinksContainer";
import { LinksContainerWithIcons } from "@/client/components/LinksContainerWithIcons";
import { Logo } from "@/client/components/Logo";
import { Modal } from "@/client/components/Modal";
import { DashboardTemplate } from "@/client/components/pages/DashboardTemplate";
import { useDisclosure } from "@chakra-ui/react";

const index = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Modal header={<p>Title</p>} isOpen={isOpen} onClose={onClose}>
        <>
          <InputText label="testing" helpText="test" />
          <InputNumber label="testing" helpText="test" />
          <InputTextArea label="testing" helpText="test" />
          <InputSelect
            options={[
              { key: "1", value: "Random" },
              { key: "2", value: "Random" },

              { key: "3", value: "Random" },

              { key: "4", value: "Random" },

              { key: "5", value: "Random" },
            ]}
            label="testing"
            helpText="test"
            placeholder="Test"
          />
        </>
      </Modal>
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
        mainSlot={<Button onClick={onOpen}>Open</Button>}
        footerSlot={<Footer />}
      />
    </>
  );
};

export default index;
