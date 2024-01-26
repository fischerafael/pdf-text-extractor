import React from "react";

export interface IClientContact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}

export interface IClient {
  id: string;
  name: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
  phoneNumber: string;
  avatar?: string;
  contacts: IClientContact[];
}

export const usePageAppClients = () => {
  return { presenters: {}, controllers: {} };
};
