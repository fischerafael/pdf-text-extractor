import axios from "axios";

export const api = {
  base: axios.create({
    baseURL: "/",
  }),
};
