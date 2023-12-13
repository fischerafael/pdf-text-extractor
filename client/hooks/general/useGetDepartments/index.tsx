import { IOption } from "@/client/interfaces";

interface Input {
  access?: string;
}

interface Output {
  options: IOption[];
}

export const useGetDepartments = ({ access }: Input): Output => {
  return {
    options: [
      { key: "1", value: "Sales" },
      { key: "2", value: "Tech" },
      { key: "3", value: "Operations" },
      { key: "4", value: "Project Management" },
    ],
  };
};
