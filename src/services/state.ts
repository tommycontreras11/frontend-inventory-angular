import { getStateById, getStates } from "../api/state";

export const retrieveStates = async () => {
  try {
    return await getStates();
  } catch (error) {
    console.error("Error fetching states:", error);
    throw error;
  }
};

export const retrieveStateById = async (id: string) => {
  try {
    return await getStateById(id);
  } catch (error) {
    console.error("Error fetching state:", error);
    throw error;
  }
};