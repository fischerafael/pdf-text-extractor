import { appConfig } from "@/client/config/app";
import { api } from "@/client/config/axios";

class UsersGateway {
  private app: string = `${appConfig.appPrefix}.users`;

  async findById(id: string) {
    const { data } = await api.entities.get<{
      data: {
        app: string;
        createdBy: string;
        details: { name: string; avatar: string };
      };
    }>(`/entities`, {
      headers: {
        app: this.app,
      },
    });
    return data.data;
  }

  async create(email: string, name: string, avatar: string) {
    const { data } = await api.entities.post<{ id: string }>(`/entities`, {
      user: email,
      app: this.app,
      details: {
        name,
        avatar,
      },
    });
    return data;
  }
}

export const usersGateway = new UsersGateway();
