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
  const mockReturn = {
    access: "test",
    refresh: "test",
  };
  return mockReturn;
};

interface LogOut {
  (input: { refresh: string }): Promise<void>;
}

const logOut: LogOut = async ({ refresh }) => {
  const url = `/logout`;
  const { data } = await api.backend.post<{
    refresh: string;
  }>(url, {
    refresh,
  });
};

interface GetUser {
  (input: { access: string }): Promise<{
    email: string;
    fullName: string;
  }>;
}

const user: GetUser = async ({ access }) => {
  const url = ``;
  const { data } = await api.backend.get<{
    email: string;
    fullName: string;
  }>(url, {
    headers: {
      Authorization: `Bearer ${access}`,
    },
  });
  const mockReturn = {
    email: "rafael@gmail.com",
    fullName: "Rafael Fischer",
  };
  return mockReturn;
};

export const apiGateway = {
  post: {
    logIn,
    logOut,
  },
  get: {
    user,
  },
};
