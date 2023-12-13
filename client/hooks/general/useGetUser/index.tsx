import { apiGateway } from "@/client/gateways/api";
import { useQuery } from "react-query";

export const useGetUser = ({
  access,
}: {
  access?: string;
}): {
  email: string;
  fullName: string;
} => {
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
