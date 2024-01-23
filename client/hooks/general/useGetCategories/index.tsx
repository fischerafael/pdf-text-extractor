import { categoriesGateway } from "@/client/gateways/api/categories";
import { IOption } from "@/client/interfaces";
import { useQuery } from "react-query";

export const useGetCategories = (loggedUser?: string) => {
  const { data, isLoading, refetch } = useQuery(
    ["/list", loggedUser],
    async () => {
      return await categoriesGateway.listByUser(loggedUser!);
    },
    {
      enabled: !!loggedUser,
    }
  );

  const categories: IOption[] =
    data?.data.map((cat) => ({
      key: cat.id,
      value: cat.details.title,
    })) || [];

  return {
    isLoading,
    categories: [...categories],
    refetch,
  };
};
