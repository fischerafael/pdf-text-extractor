import { pages } from "@/client/config/links";
import { utils } from "@/client/utils";

export const usePageAppPrompt = () => {
  const handleNavigateBackToPrompts = () => {
    utils.handleNavigateTo(pages.prompts.href);
  };

  return { presenters: {}, controllers: { handleNavigateBackToPrompts } };
};
