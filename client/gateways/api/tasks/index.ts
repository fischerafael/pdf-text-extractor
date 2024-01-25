import { appConfig } from "@/client/config/app";
import { api } from "@/client/config/axios";
import { format } from "date-fns";

class TasksGateway {
  private app: string = `${appConfig.appPrefix}.tasks`;
  private resource: string = "/entities";

  async create(
    user: string,
    task: string,
    duration: string,
    category: string,
    createdAt: string
  ) {
    const { data } = await api.entities.post<{ id: string }>(`/entities`, {
      user: user,
      app: this.app,
      details: {
        task,
        duration,
        category,
        createdAt,
      },
    });
    return data;
  }

  async listByUserByDate(user: string, createdAt: string) {
    const { data } = await api.entities.get<{
      message: string;
      count: number;
      data: {
        id: string;
        details: {
          duration: string;
          createdAt: string;
          task: string;
          category: string;
        };
      }[];
    }>(`/entities?createdAt=${createdAt}`, {
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

  async update(
    id: string,
    payload: {
      task: string;
      duration: string;
      category: string;
    }
  ) {
    const { data } = await api.entities.put(this.resource, payload, {
      headers: {
        id,
        data: "details",
      },
    });
    return data;
  }
}

export const tasksGateway = new TasksGateway();

export const formatDate = (date: Date = new Date()) => {
  return format(date, "dd-MM-yyyy");
};
