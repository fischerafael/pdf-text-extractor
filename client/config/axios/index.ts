import axios from "axios";

export const api = {
  backend: axios.create({
    baseURL: "/",
  }),
  entities: axios.create({
    // baseURL: "https://entity-manager-api.vercel.app/api",
    baseURL: "http://localhost:3001/api",
  }),
};
