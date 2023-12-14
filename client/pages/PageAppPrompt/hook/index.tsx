import { pages } from "@/client/config/links";
import { useGetPromptById } from "@/client/hooks/general/useGetPromptById";
import { useAuthentication } from "@/client/hooks/global/useAuthenticationGlobal";
import { utils } from "@/client/utils";
import { useRouter } from "next/router";

export const usePageAppPrompt = () => {
  const { query } = useRouter();
  const promptId = query.id as string | undefined;
  const { presenters } = useAuthentication();
  const handleNavigateBackToPrompts = () => {
    utils.handleNavigateTo(pages.prompts.href);
  };
  const { prompt } = useGetPromptById({
    access: presenters.access,
    promptId: promptId,
  });

  console.log(promptId);

  return {
    presenters: {
      title: prompt.title,
      description: prompt.description,
      categories: prompt.categories,
      departments: prompt.departments,
      id: prompt.id,
      author: prompt.author,
      topP: prompt.topP,
      temperature: prompt.temperature,
      maxResponse: prompt.maxResponse,
    },
    controllers: { handleNavigateBackToPrompts },
  };
};
