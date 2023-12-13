import { pages } from "@/client/config/links";
import { utils } from "@/client/utils";
import React from "react";

export const usePageSignIn = () => {
  const handleBackToHome = () => {
    utils.handleNavigateTo(pages.landingPage.href);
  };

  return { controllers: { handleBackToHome }, presenters: {} };
};
