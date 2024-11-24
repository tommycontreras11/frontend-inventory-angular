import api from "./index";

export interface ITransaction {
    id: number,
    description: string,
    documentDate: string,
    transactionTypeId: number,
    stateId: number,
    articleId: number,
    quantity: number,
    total?: number
}

export const getTransactions = async () => {
  const response = await api.get("/transactions");
  return response.data;
};

export const getTransactionById = async (id: number) => {
  const response = await api.get(`/transactions/${id}`);
  return response.data;
};

export const createTransaction = async (data: ITransaction) => {
    const response = await api.post(`/transactions`, data);
    return response.data;
  };

export const updateTransaction = async (id: number, data: ITransaction) => {
  const response = await api.patch(`/transactions/${id}`, data);
  return response.data;
};

export const deleteTransaction = async (id: number) => {
  const response = await api.delete(`/transactions/${id}`);
  return response.data;
};
