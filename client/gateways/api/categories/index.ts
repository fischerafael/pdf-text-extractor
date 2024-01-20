import { appConfig } from "@/client/config/app";
import { api } from "@/client/config/axios";

class CategoriesGateway {
  private app: string = `${appConfig.appPrefix}.categories`;

  async create(user: string, title: string) {
    console.log(process.env.NEXT_PUBLIC_ENTITIES_API_KEY);
    const { data } = await api.entities.post<{ id: string }>(
      `/entities`,
      {
        user: user,
        app: this.app,
        details: {
          title: "test",
        },
      },
      {
        headers: {
          api_key: "5efdad0e-a567-4487-8ed4-b5070fbbf153",
        },
      }
    );
    return data;
  }
}

export const categoriesGateway = new CategoriesGateway();
