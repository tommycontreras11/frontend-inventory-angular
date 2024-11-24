import { getTransactionTypeById, getTransactionTypes } from "../api/transaction-type";

export const retrieveTransactionTypes = async () => {
  try {
    return await getTransactionTypes();
  } catch (error) {
    console.error("Error fetching transaction types:", error);
    throw error;
  }
};

export const retrieveTransactionTypeById = async (id: string) => {
  try {
    return await getTransactionTypeById(id);
  } catch (error) {
    console.error("Error fetching transaction type:", error);
    throw error;
  }
};