import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import FormError from "../components/FormError/FormError";

const Stage1 = () => {
  const [selectedRole, setSelectedRole] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { setRole, setCurrentStage, setStage1Done } = useOutletContext();

  const handleNext = () => {
    if (!selectedRole) {
      setError("Role is required");
      return;
    }

    setStage1Done(true);
    setCurrentStage(2); // Stage indicator updated here

    navigate("/register/stage-2", { replace: true }); // block back navigation after completion
  };

  return (
    <div>
      <select
        className="w-full border px-3 py-2 mb-2"
        value={selectedRole}
        onChange={(e) => {
          const value = e.target.value;
          setSelectedRole(value);
          setRole(value); // Update global state immediately
        }}
      >
        <option value="">Select Role</option>
        <option value="Student">Student</option>
        <option value="Teacher">Teacher</option>
        <option value="Professor">Professor</option>
      </select>

      <FormError message={error} />

      <button
        onClick={handleNext}
        className="w-full cursor-pointer bg-red-500 text-white py-2 rounded hover:bg-red-600 mt-4"
      >
        Next
      </button>
    </div>
  );
};

export default Stage1;
