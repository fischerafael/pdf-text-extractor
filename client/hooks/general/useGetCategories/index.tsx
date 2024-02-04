import { categoriesGateway } from "@/client/gateways/api/categories";
import { IOption } from "@/client/interfaces";
import { useQuery } from "react-query";

export interface Category {
  id: string;
  details: {
    title: string;
    color: string;
    experience: number;
  };
}

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

  const optionsCategories: IOption[] =
    data?.data.map((cat) => ({
      key: cat.id,
      value: cat.details.title,
    })) || [];

  const categories: Category[] = data?.data || [];

  return {
    isLoading,
    categories: categories,
    optionsCategories: [...optionsCategories],
    refetch,
  };
};
