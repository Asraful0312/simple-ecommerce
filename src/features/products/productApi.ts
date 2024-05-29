import axiosInstance from "@/utils/axios";

export const getProducts = async () => {
  const response = await axiosInstance.get("/products");
  return response.data;
};

export const getFeaturedProducts = async () => {
  const response = await axiosInstance.get("/products?limit=4&skip=4");
  return response.data;
};

export const getSingleProduct = async (id: number) => {
  const response = await axiosInstance.get(`/products/${id}`);
  return response.data;
};

export const getRelatedProducts = async (category: string) => {
  const response = await axiosInstance.get(`/products/category/${category}`);
  return response.data;
};
