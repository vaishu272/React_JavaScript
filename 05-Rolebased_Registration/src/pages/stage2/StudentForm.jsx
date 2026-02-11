import { useState, useRef } from "react";
import { useOutletContext } from "react-router-dom";
import FormError from "../../components/FormError/FormError";

const StudentForm = ({ onSuccess }) => {
  const { setFormData } = useOutletContext();
  const [school, setSchool] = useState("");
  const [grade, setGrade] = useState("");
  const [errors, setErrors] = useState({});

  const schoolRef = useRef(null);
  const gradeRef = useRef(null);
  const submittingRef = useRef(false);

  const validate = () => {
    const newErrors = {};

    if (!school) newErrors.school = "School is required";
    if (!grade) newErrors.grade = "Grade is required";

    setErrors(newErrors);

    if (newErrors.school) schoolRef.current.focus();
    else if (newErrors.grade) gradeRef.current.focus();

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
      student: { school, grade },
    });
  };

  return (
    <div>
      <input
        ref={schoolRef}
        className="w-full border px-3 py-2 mb-2"
        placeholder="School Name"
        value={school}
        onChange={(e) => {
          const value = e.target.value;
          setSchool(value);

          setFormData((prev) => ({
            ...prev,
            student: {
              ...prev.student,
              school: value,
            },
          }));
        }}
      />
      <FormError message={errors.school} />

      <input
        ref={gradeRef}
        type="number"
        className="w-full border px-3 py-2 mb-2"
        placeholder="Grade"
        value={grade}
        onChange={(e) => {
          const value = e.target.value;
          setGrade(value);

          setFormData((prev) => ({
            ...prev,
            student: {
              ...prev.student,
              grade: value,
            },
          }));
        }}
      />
      <FormError message={errors.grade} />

      <button
        onClick={handleSubmit}
        className="w-full cursor-pointer bg-orange-500 text-white py-2 rounded hover:bg-orange-600 mt-4"
      >
        Next
      </button>
    </div>
  );
};

export default StudentForm;
