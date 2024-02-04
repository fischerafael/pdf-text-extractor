import { appConfig } from "@/client/config/app";
import { api } from "@/client/config/axios";

const initialExperience = 0;

class CategoriesGateway {
  private app: string = `${appConfig.appPrefix}.categories`;

  async create(user: string, title: string, color: string) {
    const { data } = await api.entities.post<{ id: string }>(`/entities`, {
      user: user,
      app: this.app,
      details: {
        title: title,
        color: color,
        experience: initialExperience,
      },
    });
    return data;
  }

  async listByUser(user: string) {
    const { data } = await api.entities.get<{
      message: string;
      count: number;
      data: {
        id: string;
        details: { title: string; color: string; experience: number };
      }[];
    }>(`/entities`, {
      headers: {
        app: this.app,
        user: user,
      },
    });
    return data;
  }

  async remove(catId: string) {
    const { data } = await api.entities.delete(`/entities`, {
      headers: {
        id: catId,
      },
    });
    return data;
  }
}

export const categoriesGateway = new CategoriesGateway();
