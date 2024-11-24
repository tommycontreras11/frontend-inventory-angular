import api from "./index";

export interface IArticle {
    id: number,
    description: string,
    entryDate: string,
    expiryDate?: string,
    quantity: number,
    cost: number
}

export const getArticles = async (): Promise<IArticle[]> => {
  const response = await api.get("/articles");
  return response.data;
};

export const getArticleById = async (id: number) => {
  const response = await api.get(`/articles/${id}`);
  return response.data;
};

export const createArticle = async (data: IArticle) => {
    const response = await api.post(`/articles`, data);
    return response.data;
  };

export const updateArticle = async (id: number, data: IArticle) => {
  const response = await api.patch(`/articles/${id}`, data);
  return response.data;
};

export const deleteArticle = async (id: number) => {
  const response = await api.delete(`/articles/${id}`);
  return response.data;
};
