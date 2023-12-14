import { pages } from "@/client/config/links";
import { useGetPromptById } from "@/client/hooks/general/useGetPromptById";
import { useAuthentication } from "@/client/hooks/global/useAuthenticationGlobal";
import { utils } from "@/client/utils";
import { useRouter } from "next/router";
import { useState } from "react";

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

  const [state, setState] = useState(parsePromptToHTML(prompt.promptText));

  const handleUpdatePrompt = (label: string, value: string) => {
    const updatedState = state.map((el) => {
      if (el.label === label) {
        return { ...el, value: value };
      }
      return el;
    });
    setState(updatedState);
  };

  const finalPrompt = getFinalPrompt(state);

  const handleCopyPromptToClipBoard = () => {
    navigator.clipboard.writeText(finalPrompt);
  };

  console.log("state - ", finalPrompt);

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
      promptHTML: state,
      finalPrompt: finalPrompt,
    },
    controllers: {
      handleNavigateBackToPrompts,
      handleUpdatePrompt,
      handleCopyPromptToClipBoard,
    },
  };
};

function parsePromptToHTML(prompt: string): ParsedElement[] {
  const parts = splitPrompt(prompt);
  const parsedElements: ParsedElement[] = [];
  for (const part of parts) {
    if (isInput(part)) {
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

const isInput = (promptPart: string): boolean => {
  return promptPart.startsWith("{") && promptPart.endsWith("}");
};

const splitPrompt = (prompt: string): string[] => {
  const regex = /(\{[^}]+\})/g;
  const parts = prompt.split(regex);
  return parts;
};

const removeCurlyBracketsFromString = (string: string): string => {
  return string.replace(/{|}/g, "");
};

const getFinalPrompt = (parsedElements: ParsedElement[]): string => {
  const textOnly = parsedElements.map((el) => {
    if (el.element.html === "input") {
      return el.value;
    }
    return el.label;
  });
  return textOnly.join(" ");
};
