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
          api_key: process.env.NEXT_PUBLIC_ENTITIES_API_KEY,
        },
      }
    );
    return data;
  }
}

export const categoriesGateway = new CategoriesGateway();
