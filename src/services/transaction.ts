import {
  createTransaction,
  deleteTransaction,
  getTransactionById,
  getTransactions,
  ITransaction,
  updateTransaction
} from "../api/transaction";

export const retrieveTransactions = async () => {
  try {
    return await getTransactions();
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
};

export const retrieveTransactionById = async (id: number) => {
  try {
    return await getTransactionById(id);
  } catch (error) {
    console.error("Error fetching transaction:", error);
    throw error;
  }
};

export const saveTransaction = async (data: ITransaction) => {
  try {
    return await createTransaction(data);
  } catch (error) {
    console.error("Error creating transaction:", error);
    throw error;
  }
};

export const modifyTransaction = async (id: number, data: ITransaction) => {
  try {
    return await updateTransaction(id, data);
  } catch (error) {
    console.error("Error updating transaction:", error);
    throw error;
  }
};

export const removeTransaction = async (id: number) => {
  try {
    return await deleteTransaction(id);
  } catch (error) {
    console.error("Error deleting transaction:", error);
    throw error;
  }
};
