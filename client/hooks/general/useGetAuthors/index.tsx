import { IOption } from "@/client/interfaces";

interface Input {
  access?: string;
}

interface Output {
  options: IOption[];
}

export const useGetAuthors = ({ access }: Input): Output => {
  return {
    options: [
      { key: "1", value: "Richard Davies" },
      { key: "2", value: "Jack Corton" },
      { key: "3", value: "Niall Hogan" },
      { key: "4", value: "Rafael Fischer" },
    ],
  };
};
