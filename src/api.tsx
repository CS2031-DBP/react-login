import axios from "axios";
import useToken from "./contexts/TokenContext";

const BACKEND_URL = "http://localhost:8080";

export function useLogin() {
  async function login(user: { email: string; password: string }) {
    try {
      const response = await axios.post(`${BACKEND_URL}/auth/login`, user);

      return { success: true, token: response.data.token };
    } catch {
      return { success: false, error: "Usuario o contraseña incorrecta" };
    }
  }

  return { login };
}

type Student = {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  age: number;
  description: string;
  password: string;
};

export function useCreateStudent() {
  const { token } = useToken();

  async function createStudent(student: Student) {
    try {
      const response = await axios.post(`${BACKEND_URL}/student`, student, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return { success: true, student: response.data };
    } catch {
      return { success: false, error: "Error al crear alumno" };
    }
  }

  return { createStudent };
}
