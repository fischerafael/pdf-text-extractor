import { api } from "@/client/config/axios";

interface LogIn {
  (input: { email: string; password: string }): Promise<{
    access: string;
    refresh: string;
  }>;
}

const logIn: LogIn = async ({ email, password }) => {
  const url = ``;
  const { data } = await api.backend.post<{
    access: string;
    refresh: string;
  }>(url, {
    email,
    password,
  });
  return data;
};

export const apiGateway = {
  post: {
    logIn,
  },
};
