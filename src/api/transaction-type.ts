import api from "./index";

export interface ITransactionType {
  id: number,
  description: string,
}

export const getTransactionTypes = async () => {
  const response = await api.get("/transaction-types");
  return response.data;
};

export const getTransactionTypeById = async (id: string) => {
  const response = await api.get(`/transaction-types/${id}`);
  return response.data;
};