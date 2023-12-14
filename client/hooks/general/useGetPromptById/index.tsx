import { IPrompt } from "@/client/interfaces";

interface Input {
  access?: string;
  promptId?: string;
}

interface Output {
  prompt: IPrompt;
}

export const useGetPromptById = (input: Input): Output => {
  return {
    prompt: MOCK_PROMPT,
  };
};

const MOCK_PROMPT: IPrompt = {
  id: "1",
  title: "Create Unit Tests for Redux Reducers",
  version: "1.0",
  description:
    "Develop unit tests for Redux reducers to ensure data manipulation functions correctly.",
  departments: ["Tech", "Quality Assurance"],
  categories: ["Technology", "Testing"],
  aiModel: "GPT 3.5 Turbo",
  promptText:
    "Write at lest {Amount of Tests} tests for {React Framework} to verify that data manipulation is working correctly.",
  author: "Ana Silva",
  temperature: 0.7,
  topP: 0.8,
  maxResponse: 500,
};
