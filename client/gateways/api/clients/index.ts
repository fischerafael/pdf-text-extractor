import { appConfig } from "@/client/config/app";
import { api } from "@/client/config/axios";
import { ICreateClient } from "@/client/pages/PageAppClientsClient/hooks";

export interface IClientAPIData {
  message: string;
  count: number;
  data: { id: string; details: ICreateClient }[];
}

export const INITIAL_DATA_CLIENT_API: IClientAPIData = {
  count: 0,
  data: [],
  message: "",
};

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
    const { data } = await api.entities.get<IClientAPIData>(`/entities`, {
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
