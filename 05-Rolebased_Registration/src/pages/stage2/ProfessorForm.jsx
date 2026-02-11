import { useState, useRef } from "react";
import { useOutletContext } from "react-router-dom";
import FormError from "../../components/FormError/FormError";

const ProfessorForm = ({ onSuccess }) => {
  const { setFormData } = useOutletContext();

  const [department, setDepartment] = useState("");
  const [researchArea, setResearchArea] = useState("");
  const [errors, setErrors] = useState({});

  const departmentRef = useRef(null);
  const researchRef = useRef(null);
  const submittingRef = useRef(false);

  const validate = () => {
    const newErrors = {};

    if (!department.trim()) {
      newErrors.department = "Department is required";
    }

    if (!researchArea.trim()) {
      newErrors.researchArea = "Research area is required";
    }

    setErrors(newErrors);

    if (newErrors.department) departmentRef.current.focus();
    else if (newErrors.researchArea) researchRef.current.focus();

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (submittingRef.current) return;
    submittingRef.current = true;

    if (!validate()) {
      submittingRef.current = false;
      return;
    }

    onSuccess({
      professor: {
        department: department.trim(),
        researchArea: researchArea.trim(),
      },
    });
  };

  return (
    <div>
      <input
        ref={departmentRef}
        className="w-full border px-3 py-2 mb-2"
        placeholder="Department"
        value={department}
        onChange={(e) => {
          const value = e.target.value;
          setDepartment(value);

          setFormData((prev) => ({
            ...prev,
            professor: {
              ...prev.professor,
              department: value,
            },
          }));
        }}
      />
      <FormError message={errors.department} />

      <input
        ref={researchRef}
        className="w-full border px-3 py-2 mb-2"
        placeholder="Research Area"
        value={researchArea}
        onChange={(e) => {
          const value = e.target.value;
          setResearchArea(value);

          setFormData((prev) => ({
            ...prev,
            professor: {
              ...prev.professor,
              researchArea: value,
            },
          }));
        }}
      />
      <FormError message={errors.researchArea} />

      <button
        onClick={handleSubmit}
        className="w-full cursor-pointer bg-orange-500 text-white py-2 rounded hover:bg-orange-600 mt-4"
      >
        Next
      </button>
    </div>
  );
};

export default ProfessorForm;
