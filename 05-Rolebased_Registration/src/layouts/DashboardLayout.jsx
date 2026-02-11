import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import StageIndicator from "../components/StageIndicator/StageIndicator";

const DashboardLayout = () => {
  /* ---------------- GLOBAL REGISTRATION STATE ---------------- */
  const [role, setRole] = useState("");
  const [currentStage, setCurrentStage] = useState(1);

  const [stage1Done, setStage1Done] = useState(false);
  const [stage2Done, setStage2Done] = useState(false);
  const [stage3Done, setStage3Done] = useState(false);

  const [formData, setFormData] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  /* ---------------- ROUTE PROTECTION (NAVIGATION ONLY) ---------------- */
  useEffect(() => {
    // Only run protection inside /register
    if (!location.pathname.startsWith("/register")) return;

    const path = location.pathname;

    // Trying to access Stage 3
    if (path.endsWith("/stage-3")) {
      if (!stage1Done) {
        navigate("/register/stage-1", {
          state: { blocked: "stage1" },
        });
        return;
      }

      if (!stage2Done) {
        navigate("/register/stage-2", {
          state: { blocked: "stage2" },
        });
        return;
      }
    }

    // Trying to access Stage 2
    if (path.endsWith("/stage-2") && !stage1Done) {
      navigate("/register/stage-1", {
        state: { blocked: "stage1" },
      });
    }
  }, [location.pathname, stage1Done, stage2Done, navigate]);

  /* ---------------- DERIVED MESSAGE (NO STATE, NO EFFECT) ---------------- */
  const blocked = location.state?.blocked;

  const message =
    blocked === "stage1"
      ? "Please complete Stage 1 (Role Selection) first."
      : blocked === "stage2"
        ? "Please complete Stage 2 (Role-Specific Details) first."
        : "";

  /* ---------------- DERIVED PROGRESS ---------------- */

  const progress = useMemo(() => {
    // -------- STAGE 1 --------
    if (currentStage === 1) {
      return role ? 33 : 0;
    }

    // -------- STAGE 2 --------
    if (currentStage === 2) {
      const roleFields = {
        Student: ["school", "grade"],
        Teacher: ["subject", "experience"],
        Professor: ["department", "researchArea"],
      };

      const fields = roleFields[role] || [];

      const filledCount = fields.filter(
        (field) => formData[role?.toLowerCase()]?.[field],
      ).length;

      const percentageInsideStage = (filledCount / fields.length) * 33;

      return Math.round(33 + percentageInsideStage);
    }

    // -------- STAGE 3 --------
    if (currentStage === 3) {
      let validCount = 0;

      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (formData.email && emailRegex.test(formData.email)) {
        validCount++;
      }

      // Validate agreement
      if (formData.agreed === true) {
        validCount++;
      }

      const percentageInsideStage = (validCount / 2) * 33;

      return Math.round(66 + percentageInsideStage);
    }

    // -------- SUCCESS --------
    if (currentStage === "success") {
      return 100;
    }

    return 0;
  }, [currentStage, role, formData]);

  /* ---------------- PROGRESS COLOR ---------------- */
  const getProgressColor = () => {
    if (progress <= 32) return "#ef4444"; // Red
    if (progress <= 65) return "#f97316"; // Orange
    if (progress <= 99) return "#3b82f6"; // Blue
    return "#22c55e"; // Green
  };

  /* ---------------- STAGE LABEL ---------------- */
  const getStageLabel = () => {
    if (currentStage === 1) return "Role Selection";

    if (currentStage === 2)
      return role ? `Role-Specific Details (${role})` : "Role-Specific Details";

    if (currentStage === 3)
      return role
        ? `Additional Information (${role})`
        : "Additional Information";

    if (currentStage === "success") return "Registration Successful";

    return "";
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white w-full max-w-xl rounded-lg shadow-lg p-6">
          {/* Header */}
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Registration App
          </h2>

          {/* Progress Bar */}
          <ProgressBar progress={progress} color={getProgressColor()} />

          {/* Stage Indicator */}
          <StageIndicator currentStage={currentStage} label={getStageLabel()} />

          {/* Nested Routes */}
          <Outlet
            context={{
              role,
              setRole,
              currentStage,
              setCurrentStage,
              progress,
              stage1Done,
              setStage1Done,
              stage2Done,
              setStage2Done,
              stage3Done,
              setStage3Done,
              formData,
              setFormData,
            }}
          />
          {/* Warning Banner */}
          {message && (
            <div className="mt-4 rounded-md bg-red-100 border border-red-400 text-red-700 px-4 py-2 text-sm">
              {message}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
