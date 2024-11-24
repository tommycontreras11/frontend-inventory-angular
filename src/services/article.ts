import {
  createArticle,
  deleteArticle,
  getArticleById,
  getArticles,
  IArticle,
  updateArticle
} from "../api/article";

export const retrieveArticles = async (): Promise<IArticle[]> => {
  try {
    return await getArticles();
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};

export const retrieveArticleById = async (id: number) => {
  try {
    return await getArticleById(id);
  } catch (error) {
    console.error("Error fetching article:", error);
    throw error;
  }
};

export const saveArticle = async (data: IArticle) => {
  try {
    return await createArticle(data);
  } catch (error) {
    console.error("Error updating article:", error);
    throw error;
  }
};

export const modifyArticle = async (id: number, data: IArticle) => {
  try {
    return await updateArticle(id, data);
  } catch (error) {
    console.error("Error updating article:", error);
    throw error;
  }
};

export const removeArticle = async (id: number) => {
  try {
    return await deleteArticle(id);
  } catch (error) {
    console.error("Error deleting article:", error);
    throw error;
  }
};
