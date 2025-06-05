import { type FormEvent } from "react";
import "../App.css";
import axios from "axios";
import useToken from "../contexts/TokenContext";
import { useNavigate } from "react-router";

const BACKEND_URL = "http://localhost:8080";

function Login() {
  const { saveToken } = useToken();
  const navigate = useNavigate();

  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const response = await axios.post(`${BACKEND_URL}/auth/login`, {
        email: email,
        password: password,
      });

      saveToken(response.data.token);
      navigate("/student_form");
    } catch {
      alert("Usuario o contraseña incorrecta");
    }
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-96">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Login
      </h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
          placeholder="Email"
          type="email"
          name="email"
          required
        />
        <input
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
          placeholder="Password"
          type="password"
          name="password"
          required
        />
        <button
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors duration-200 font-semibold"
          type="submit"
        >
          Log in
        </button>
      </form>
    </div>
  );
}

export default Login;
