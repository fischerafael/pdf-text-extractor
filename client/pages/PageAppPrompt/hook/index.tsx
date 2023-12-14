import { pages } from "@/client/config/links";
import { useGetPromptById } from "@/client/hooks/general/useGetPromptById";
import { useAuthentication } from "@/client/hooks/global/useAuthenticationGlobal";
import { utils } from "@/client/utils";
import { useRouter } from "next/router";

interface ParsedElement {
  element: {
    html: string;
    type: string;
  };
  label: string;
  value: string;
}

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

  console.log("original ", prompt.promptText);
  console.log("parsed ", parseText(prompt.promptText));

  console.log(prompt.promptText);
  // const html: ParsedElement[] = [
  //   {
  //     element: {
  //       html: "p",
  //       type: "",
  //     },
  //     label: "Write at lest",
  //     value: "",
  //   },
  //   {
  //     element: {
  //       html: "input",
  //       type: "text",
  //     },
  //     label: "Amount of Tests",
  //     value: "",
  //   },
  //   {
  //     element: {
  //       html: "p",
  //       type: "",
  //     },
  //     label: "tests for",
  //     value: "",
  //   },
  //   {
  //     element: {
  //       html: "input",
  //       type: "text",
  //     },
  //     label: "React Framework",
  //     value: "",
  //   },
  //   {
  //     element: {
  //       html: "p",
  //       type: "",
  //     },
  //     label: "to verify that data manipulation is working correctly.",
  //     value: "",
  //   },
  // ];

  const handleChange = (label: string, value: string) => {};

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

function parseText(prompt: string): ParsedElement[] {
  const parts = splitPrompt(prompt);
  const parsedElements: ParsedElement[] = [];

  for (const part of parts) {
    const isInput = part.startsWith("{") && part.endsWith("}");
    if (isInput) {
      parsedElements.push({
        element: {
          html: "input",
          type: "text",
        },
        label: removeCurlyBracketsFromString(part),
        value: "",
      });
    } else {
      parsedElements.push({
        element: {
          html: "p",
          type: "",
        },
        label: part.trim(),
        value: "",
      });
    }
  }

  return parsedElements;
}

const splitPrompt = (prompt: string): string[] => {
  const regex = /(\{[^}]+\})/g;
  const parts = prompt.split(regex);
  return parts;
};

const removeCurlyBracketsFromString = (string: string): string => {
  return string.replace(/{|}/g, "");
};
