import { useOutletContext, useNavigate } from "react-router-dom";
import StudentForm from "./stage2/StudentForm";
import TeacherForm from "./stage2/TeacherForm";
import ProfessorForm from "./stage2/ProfessorForm";

const Stage2 = () => {
  const navigate = useNavigate();

  const { role, setStage2Done, setCurrentStage, setFormData } =
    useOutletContext();

  const handleSuccess = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStage2Done(true);
    setCurrentStage(3);
    navigate("/register/stage-3", { replace: true }); // block back navigation after completion
  };

  if (!role) {
    navigate("/register/stage-1", { replace: true });
    return null;
  }

  if (role === "Student") return <StudentForm onSuccess={handleSuccess} />;
  if (role === "Teacher") return <TeacherForm onSuccess={handleSuccess} />;
  if (role === "Professor") return <ProfessorForm onSuccess={handleSuccess} />;

  return null;
};

export default Stage2;
