import { useOutletContext, useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  const {
    role,
    formData,
    setFormData,
    setRole,
    setStage1Done,
    setStage2Done,
    setStage3Done,
    setCurrentStage,
  } = useOutletContext();

  const handleFinish = () => {
    setStage1Done(false);
    setStage2Done(false);
    setStage3Done(false);
    setRole("");
    setCurrentStage(1);
    setFormData({});

    navigate("/", { replace: true });
  };

  return (
    <>
      {/* Info Card */}
      <div className="bg-gray-50 border rounded-lg p-4 space-y-2 text-sm">
        <p>
          <span className="font-semibold text-gray-700">Role:</span> {role}
        </p>

        {formData.student && (
          <>
            <p>
              <span className="font-semibold text-gray-700">School:</span>{" "}
              {formData.student.school}
            </p>
            <p>
              <span className="font-semibold text-gray-700">Grade:</span>{" "}
              {formData.student.grade}
            </p>
          </>
        )}

        {formData.teacher && (
          <>
            <p>
              <span className="font-semibold text-gray-700">Subject:</span>{" "}
              {formData.teacher.subject}
            </p>
            <p>
              <span className="font-semibold text-gray-700">Experience:</span>{" "}
              {formData.teacher.experience}
            </p>
          </>
        )}

        {formData.professor && (
          <>
            <p>
              <span className="font-semibold text-gray-700">Department:</span>{" "}
              {formData.professor.department}
            </p>
            <p>
              <span className="font-semibold text-gray-700">
                Research Area:
              </span>{" "}
              {formData.professor.researchArea}
            </p>
          </>
        )}

        <p className="pt-2 border-t mt-3">
          <span className="font-semibold text-gray-700">Email:</span>{" "}
          {formData.email}
        </p>
      </div>

      {/* Action Button */}
      <button
        onClick={handleFinish}
        className="
            mt-6 w-full cursor-pointer py-2 rounded-lg
            bg-blue-600 text-white font-medium
            hover:bg-blue-700 transition
          "
      >
        Go back to Registration
      </button>
    </>
  );
};

export default Success;
