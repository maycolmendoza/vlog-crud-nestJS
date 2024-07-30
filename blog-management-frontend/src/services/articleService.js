import axios from 'axios';

const API_URL = 'http://localhost:3000/articles';

export const getArticles = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createArticle = async (article) => {
  const response = await axios.post(API_URL, article);
  return response.data;
};

export const deleteArticle = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
