import { appConfig } from "@/client/config/app";
import { api } from "@/client/config/axios";
import { utils } from "@/client/utils";
import { format } from "date-fns";

interface ListByUserByDateResponse {
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
}

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
    const { data } = await api.entities.get<ListByUserByDateResponse>(
      `/entities?createdAt=${createdAt}`,
      {
        headers: {
          app: this.app,
          user: user,
        },
      }
    );
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

  async getTasksUntilDaysAgo(user: string, daysAgo: number = 7) {
    try {
      const today = new Date();
      const lastWeekRawDates = getPastDates(today, daysAgo);
      const lastWeekFormattedDates = lastWeekRawDates.map((date) =>
        utils.formatDate(date)
      );
      const apiCallsArray = lastWeekFormattedDates.map((date) =>
        this.listByUserByDate(user, date)
      );
      const response = await Promise.all(apiCallsArray);
      const formattedResponse = response.map((day, index) => ({
        ...day,
        dayOfTheWeek: lastWeekFormattedDates[index],
      }));
      return formattedResponse;
    } catch (e: any) {
      console.log("[result]", e.message);
      throw new Error(e.message);
    }
  }
}

export const tasksGateway = new TasksGateway();

const getPastDates = (today: Date, days: number = 7) => {
  const daysBefore = days <= 7 ? days : 7;
  const lastDays: Date[] = [];
  lastDays.push(new Date(today));
  for (let dayIndex = 1; dayIndex < daysBefore; dayIndex++) {
    const dayBefore = new Date(today);
    dayBefore.setDate(today.getDate() - dayIndex);
    lastDays.push(dayBefore);
  }
  lastDays.reverse();
  return lastDays;
};
