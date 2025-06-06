import { useCreateStudent } from "../api";

function StudentForm() {
  const { createStudent } = useCreateStudent();

  const alumno = {
    firstname: "John",
    lastname: "Doe",
    email: "john.doe@example.com",
    phone: "+1234567890",
    age: 20,
    description: "Computer Science Student",
    password: "securePassword123",
  };

  async function handleButton() {
    const result = await createStudent(alumno);

    if (result.success) {
      console.log(result.student);
    } else {
      console.log(result.error);
    }
  }

  return (
    <button
      className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors duration-200 font-semibold"
      onClick={handleButton}
    >
      Crear alumno
    </button>
  );
}

export default StudentForm;
