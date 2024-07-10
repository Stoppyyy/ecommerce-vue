import axios from "axios";

export const getProducts = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
};

const getProduct = async (id) => {
  const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return response.data;
};

export const getCategories = async () => {
  const response = await axios.get(
    "https://fakestoreapi.com/products/categories",
  );
  return response.data;
};

const getProductsByCategory = async (category) => {
  const response = await axios.get(
    `https://fakestoreapi.com/products/category/${category}`,
  );
  return response.data;
};

const newProduct = async () => {
  const response = await axios.get(`https://fakestoreapi.com/carts`);
  return response.data;
};
