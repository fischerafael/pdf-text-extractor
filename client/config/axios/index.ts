import axios from "axios";

export const api = {
  backend: axios.create({
    baseURL: "/",
  }),
  entities: axios.create({
    baseURL: "https://entity-manager-api.vercel.app/api",
    headers: {
      api_key: process.env.NEXT_PUBLIC_ENTITIES_API_KEY,
    },
  }),
};
