import { IOption } from "@/client/interfaces";

interface Input {
  access?: string;
}

interface Output {
  options: IOption[];
}

export const useGetAIModels = ({ access }: Input): Output => {
  return {
    options: [
      { key: "1", value: "GPT 3.5 Turbo" },
      { key: "2", value: "GPT 4" },
    ],
  };
};
