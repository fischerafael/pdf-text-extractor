import axios from "axios";

export const api = {
  backend: axios.create({
    baseURL: "/",
  }),
};
