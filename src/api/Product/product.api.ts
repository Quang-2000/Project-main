import { axiosClient } from "../axiosClient";

export const fetchProductsByName = async (name: string) => {
  const response = await axiosClient.get(`/products`, {
    params: { name },
  });
  return response.data;
};
