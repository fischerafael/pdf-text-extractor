import { Avatar } from "@/client/components/Avatar";
import { Button } from "@/client/components/Button";
import { DashboardTemplate } from "@/client/components/DashboardTemplate";
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
import { usePageApp } from "./hook";
import * as C from "@chakra-ui/react";
import { MainSlotContainer } from "@/client/components/MainSlotContainer";

export const PageApp = () => {
  const { controllers, presenters } = usePageApp();

  return (
    <>
      <Modal
        header={<p>Title</p>}
        isOpen={presenters.isOpen}
        onClose={controllers.onClose}
      >
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
              <Avatar
                title={presenters.userName}
                subTitle={presenters.userEmail}
                src={presenters.imageSource}
              />
            }
            linksSlot={<LinksContainer />}
            actionSlot={
              <Button onClick={controllers.handleLogOut}>Log Out</Button>
            }
            isDisplayLinksOnWeb={false}
          />
        }
        mainSlot={
          <MainSlotContainer>
            <Button onClick={controllers.onOpen}>Open</Button>
          </MainSlotContainer>
        }
        footerSlot={<Footer />}
      />
    </>
  );
};
