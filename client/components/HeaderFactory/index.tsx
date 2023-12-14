import React from "react";
import { Header } from "../Header";
import { Avatar } from "../Avatar";
import { useAuthentication } from "@/client/hooks/global/useAuthenticationGlobal";
import { useGlobalCache } from "@/client/hooks/global/useGlobalCache";
import { Button } from "../Button";
import { LinksContainer } from "../LinksContainer";

export const HeaderAppFactory = () => {
  const { controllers } = useAuthentication();
  const { presenters } = useGlobalCache();

  const handleLogOut = async () => {
    try {
      await controllers.logOut();
    } catch (e: any) {
      console.log(e.message);
    }
  };

  const userName = presenters.userFullName;
  const userEmail = presenters.userEmail;

  return (
    <Header
      logoSlot={<Avatar title={userName} subTitle={userEmail} src={userName} />}
      linksSlot={<LinksContainer />}
      actionSlot={<Button onClick={handleLogOut}>Log Out</Button>}
      isDisplayLinksOnWeb={false}
    />
  );
};
