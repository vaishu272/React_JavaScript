import { useState, useRef } from "react";
import { useOutletContext } from "react-router-dom";
import FormError from "../../components/FormError/FormError";

const TeacherForm = ({ onSuccess }) => {
  const { setFormData } = useOutletContext();

  const [subject, setSubject] = useState("");
  const [experience, setExperience] = useState("");
  const [errors, setErrors] = useState({});

  const subjectRef = useRef(null);
  const experienceRef = useRef(null);
  const submittingRef = useRef(false);

  const validate = () => {
    const newErrors = {};

    if (!subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (experience === "") {
      newErrors.experience = "Experience is required";
    } else if (Number(experience) < 0) {
      newErrors.experience = "Experience must be 0 or greater";
    }

    setErrors(newErrors);

    if (newErrors.subject) subjectRef.current.focus();
    else if (newErrors.experience) experienceRef.current.focus();

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
      teacher: {
        subject: subject.trim(),
        experience: Number(experience),
      },
    });
  };

  return (
    <div>
      <input
        ref={subjectRef}
        className="w-full border px-3 py-2 mb-2"
        placeholder="Subject"
        value={subject}
        onChange={(e) => {
          const value = e.target.value;
          setSubject(value);

          setFormData((prev) => ({
            ...prev,
            teacher: {
              ...prev.teacher,
              subject: value,
            },
          }));
        }}
      />
      <FormError message={errors.subject} />

      <input
        ref={experienceRef}
        type="number"
        min="0"
        className="w-full border px-3 py-2 mb-2"
        placeholder="Years of Experience"
        value={experience}
        onChange={(e) => {
          const value = e.target.value;
          setExperience(value);

          setFormData((prev) => ({
            ...prev,
            teacher: {
              ...prev.teacher,
              experience: value,
            },
          }));
        }}
      />
      <FormError message={errors.experience} />

      <button
        onClick={handleSubmit}
        className="w-full cursor-pointer bg-orange-500 text-white py-2 rounded hover:bg-orange-600 mt-4"
      >
        Next
      </button>
    </div>
  );
};

export default TeacherForm;
