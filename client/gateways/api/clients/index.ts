import { appConfig } from "@/client/config/app";
import { api } from "@/client/config/axios";
import { ICreateClient } from "@/client/pages/PageAppClientsClient/hooks";

class ClientsGateway {
  private app: string = `${appConfig.appPrefix}.clients`;

  async create(user: string, payload: ICreateClient) {
    const { data } = await api.entities.post<{ id: string }>(`/entities`, {
      user: user,
      app: this.app,
      details: payload,
    });
    return data;
  }

  async listByUser(user: string) {
    const { data } = await api.entities.get<{
      message: string;
      count: number;
      data: { id: string; details: ICreateClient }[];
    }>(`/entities`, {
      headers: {
        app: this.app,
        user: user,
      },
    });
    return data;
  }

  async remove(id: string) {
    const { data } = await api.entities.delete(`/entities`, {
      headers: {
        id: id,
      },
    });
    return data;
  }
}

export const clientsGateway = new ClientsGateway();
