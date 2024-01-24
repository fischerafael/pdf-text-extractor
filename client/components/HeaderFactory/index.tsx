import { useAuthentication } from "@/client/hooks/global/useAuthenticationGlobal";
import { Avatar } from "../Avatar";
import { Header } from "../Header";

import { Button } from "../Button";
import { LinksContainer } from "../LinksContainer";

export const HeaderAppFactory = () => {
  const { controllers } = useAuthentication();

  const handleLogOut = async () => {
    try {
      await controllers.logOut();
    } catch (e: any) {
      console.log(e.message);
    }
  };

  return (
    <Header
      logoSlot={
        <Avatar title={"userName"} subTitle={"userEmail"} src={"userName"} />
      }
      linksSlot={<LinksContainer />}
      actionSlot={<Button onClick={handleLogOut}>Log Out</Button>}
      isDisplayLinksOnWeb={false}
    />
  );
};
