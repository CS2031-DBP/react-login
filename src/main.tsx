import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import Login from "./pages/Login.tsx";
import { TokenProvider } from "./contexts/TokenContext.tsx";
import StudentForm from "./pages/StudentForm.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TokenProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/student_form" element={<StudentForm />} />
        </Routes>
      </BrowserRouter>
    </TokenProvider>
  </StrictMode>
);
