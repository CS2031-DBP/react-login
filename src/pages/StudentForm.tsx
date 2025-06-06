import type { FormEvent } from "react";
import { useCreateStudent } from "../api";
import "../styles/App.css";

function StudentForm() {
  const { createStudent } = useCreateStudent();

  const formData = {
    firstname: "John",
    lastname: "Doe",
    email: "john.doe@example.com",
    phone: "+1234567890",
    age: 20,
    description: "Computer Science Student",
    password: "securePassword123",
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const studentForm = new FormData(e.currentTarget);

    const studentData = {
      firstname: studentForm.get("firstname") as string,
      lastname: studentForm.get("lastname") as string,
      email: studentForm.get("email") as string,
      phone: studentForm.get("phone") as string,
      age: Number(studentForm.get("age")),
      description: studentForm.get("description") as string,
      password: studentForm.get("password") as string,
    };

    const result = await createStudent(studentData);

    if (result.success) {
      console.log(result.student);
      alert("Alumno creado correctamente");
    } else {
      console.log(result.error);
      alert(result.error);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Crear Alumno
      </h2>
      <p className="text-center text-gray-600 mb-6 text-sm">
        Complete el formulario para registrar un nuevo alumno
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="firstname"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Nombre
          </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            defaultValue={formData.firstname}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            placeholder="Ingrese el nombre"
          />
        </div>

        <div>
          <label
            htmlFor="lastname"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Apellido
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            defaultValue={formData.lastname}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            placeholder="Ingrese el apellido"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            defaultValue={formData.email}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            placeholder="ejemplo@correo.com"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Teléfono
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            defaultValue={formData.phone}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            placeholder="+1234567890"
          />
        </div>

        <div>
          <label
            htmlFor="age"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Edad
          </label>
          <input
            type="number"
            id="age"
            name="age"
            defaultValue={formData.age}
            required
            min="1"
            max="100"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            placeholder="20"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Descripción
          </label>
          <textarea
            id="description"
            name="description"
            defaultValue={formData.description}
            required
            rows={3}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 resize-none"
            placeholder="Descripción del alumno"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            name="password"
            defaultValue={formData.password}
            required
            minLength={6}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            placeholder="Mínimo 6 caracteres"
          />
        </div>

        <button
          type="submit"
          className={
            "w-full py-3 rounded-md font-semibold transition-colors duration-200 bg-blue-600 text-white hover:bg-blue-700"
          }
        >
          "Crear Alumno"
        </button>
      </form>
    </div>
  );
}

export default StudentForm;
