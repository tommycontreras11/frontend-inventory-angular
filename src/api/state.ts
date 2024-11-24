import api from "./index";

export interface IState {
  id: number,
  description: string,
}

export const getStates = async () => {
  const response = await api.get("/states");
  return response.data;
};

export const getStateById = async (id: string) => {
  const response = await api.get(`/states/${id}`);
  return response.data;
};