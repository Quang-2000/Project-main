import { useState } from "react";
import { loginUser, registerUser } from "../api/SignIn/signIn.api";

interface User {
  username: string;
  email: string;
}

export const userAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const register = async (
    username: string,
    email: string,
    password: string
  ) => {
    setLoading(true);
    setError(null);

    try {
      const result = await registerUser(username, email, password);
      setUser(result);
    } catch (error) {
      setError("Đăng ký không thành công");
    } finally {
      setLoading(false);
    }
  };

  const login = async (username: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      const result = await loginUser(username, password);
      setUser(result);
    } catch (error) {
      setError("Đăng nhập không thành công");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return { user, loading, error, register, login, logout };
};
