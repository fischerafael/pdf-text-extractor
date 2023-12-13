import { IOption } from "@/client/interfaces";

interface Input {
  access?: string;
}

interface Output {
  options: IOption[];
}

export const useGetCategories = ({ access }: Input): Output => {
  return {
    options: [
      { key: "1", value: "Testing" },
      { key: "2", value: "Code Creation" },
      { key: "3", value: "Mocks" },
      { key: "4", value: "User Stories" },
    ],
  };
};
