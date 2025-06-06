import { type FormEvent } from "react";
import "../styles/App.css";
import useToken from "../contexts/TokenContext";
import { useLogin } from "../api";
import { useNavigate } from "react-router";

function Login() {
  const { saveToken } = useToken();
  const { login } = useLogin();
  const navegate = useNavigate();

  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const result = await login({ email, password });

    if (result.success) {
      saveToken(result.token);
      navegate("/student_form");
    } else {
      alert(result.error);
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
        />
        <input
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
          placeholder="Password"
          type="password"
          name="password"
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
