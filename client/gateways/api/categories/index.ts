import { appConfig } from "@/client/config/app";
import { api } from "@/client/config/axios";

class CategoriesGateway {
  private app: string = `${appConfig.appPrefix}.categories`;

  async create(user: string, title: string) {
    const { data } = await api.entities.post<{ id: string }>(`/entities/`, {
      user: user,
      app: this.app,
      details: {
        title: title,
      },
    });
    return data;
  }
}

export const categoriesGateway = new CategoriesGateway();
