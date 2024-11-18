import { axiosClient } from "../axiosClient";

export const registerUser = async (
  username: string,
  email: string,
  password: string
) => {
  try {
    const response = await axiosClient.post("users", {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error("Đăng ký không thành công");
  }
};

export const loginUser = async (username: string, password: string) => {
  try {
    const response = await axiosClient.post("users/login", {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error("Đăng nhập không thành công");
  }
};
