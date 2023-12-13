import { apiGateway } from "@/client/gateways/api";
import { useQuery } from "react-query";

interface Input {
  access?: string;
  title?: string;
  departmentId?: number[];
  categoryId?: number[];
  aiModelId?: number[];
  authorId?: number[];
}

interface Output {
  email: string;
  fullName: string;
}

export const useGetPrompts = ({ access }: Input): Output => {
  const { data } = useQuery(
    ["user", access],
    async () => {
      const data = await apiGateway.get.user({ access: access! });
      return data;
    },
    {
      enabled: !!access,
    }
  );
  return {
    email: data?.email || "",
    fullName: data?.fullName || "",
  };
};
