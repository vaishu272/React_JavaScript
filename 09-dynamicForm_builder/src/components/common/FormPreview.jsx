import { useState } from "react";
import { saveSubmission } from "../../lib/storageService";

export default function FormPreview({
  fields,
  title,
  desc,
  setPreview,
  setShowData,
}) {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({}); // track field errors

  // handle changes
  const handleChange = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));

    // remove error instantly when user types/selects
    setErrors((prev) => {
      const copy = { ...prev };
      delete copy[name];
      return copy;
    });
  };

  // handle checkbox (multi-select)
  const handleCheckbox = (name, option, checked) => {
    const prev = values[name] || [];
    const updated = checked
      ? [...prev, option]
      : prev.filter((v) => v !== option);

    handleChange(name, updated);
  };

  // submit form
  const handleSubmit = () => {
    const newErrors = {};

    fields.forEach((f) => {
      const val = values[f.name];

      // Required validation
      if (f.required) {
        const isEmpty =
          val === undefined ||
          val === null ||
          val === "" ||
          (Array.isArray(val) && val.length === 0);

        if (isEmpty) {
          newErrors[f.name] = "This field is required";
          return;
        }
      }

      // TYPE VALIDATIONS
      if (val) {
        // EMAIL
        if (f.inputType === "email") {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(val)) {
            newErrors[f.name] = "Enter a valid email address as example@eg.com";
          }
        }

        // PHONE
        if (f.inputType === "tel") {
          const phoneRegex = /^[0-9]{10}$/;
          if (!phoneRegex.test(val)) {
            newErrors[f.name] = "Enter a valid 10-digit phone number";
          }
        }

        // NUMBER
        if (f.inputType === "number") {
          if (isNaN(val)) {
            newErrors[f.name] = "Enter a valid number";
          }
        }

        // PASSWORD
        if (f.inputType === "password") {
          if (val.length < 6) {
            newErrors[f.name] = "Password must be at least 6 characters";
          }
        }
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    saveSubmission({
      title,
      desc,
      values,
    });

    setPreview(false);
    setShowData(true);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm border p-8">
          {/* HEADER */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-1">
              {title || "Untitled Form"}
            </h2>
            {desc && <p className="text-gray-500">{desc}</p>}
          </div>

          <div className="space-y-4">
            {/* FIELDS */}
            <div className="space-y-4">
              {fields.map((f) => (
                <div
                  key={f.id}
                  className={`
    border rounded-xl p-4 transition-all duration-200 ease-in-out
    ${
      errors[f.name]
        ? "border-red-400 bg-white ring-2 ring-red-200"
        : "border-gray-200 bg-gray-50 hover:border-gray-300"
    }
  `}
                >
                  {f.type === "title" ? (
                    <h3 className="font-semibold text-lg">{f.label}</h3>
                  ) : (
                    <>
                      {/* LABEL */}

                      <label className="block mb-2 font-medium text-gray-700">
                        {f.label}
                        {f.required && (
                          <span className="text-red-500 ml-1">*</span>
                        )}
                      </label>

                      {/* TEXT */}
                      {f.type === "text" && (
                        <input
                          type={f.inputType || "text"}
                          required={f.required}
                          placeholder={f.placeholder}
                          className="w-full border rounded-md px-3 py-2 bg-white focus:ring-2 focus:ring-black"
                          value={values[f.name] || ""}
                          onChange={(e) => handleChange(f.name, e.target.value)}
                        />
                      )}

                      {/* DROPDOWN */}
                      {f.type === "dropdown" && (
                        <select
                          className="w-full border rounded-md px-3 py-2 bg-white focus:ring-2 focus:ring-black"
                          value={values[f.name] ?? ""}
                          onChange={(e) => handleChange(f.name, e.target.value)}
                        >
                          <option value="" disabled>
                            Select option
                          </option>
                          {f.options.map((o, i) => (
                            <option key={i} value={o}>
                              {o}
                            </option>
                          ))}
                        </select>
                      )}

                      {/* RADIO */}
                      {f.type === "radio" && (
                        <div className="space-y-2 mt-2">
                          {f.options.map((o, i) => (
                            <label
                              key={i}
                              className="flex items-center gap-2 text-sm"
                            >
                              <input
                                type="radio"
                                name={f.name}
                                value={o}
                                checked={values[f.name] === o}
                                onChange={(e) =>
                                  handleChange(f.name, e.target.value)
                                }
                              />
                              {o}
                            </label>
                          ))}
                        </div>
                      )}

                      {/* CHECKBOX */}
                      {f.type === "checkbox" && (
                        <div className="space-y-2 mt-2">
                          {f.options.map((o, i) => (
                            <label
                              key={i}
                              className="flex items-center gap-2 text-sm"
                            >
                              <input
                                type="checkbox"
                                checked={(values[f.name] || []).includes(o)}
                                onChange={(e) =>
                                  handleCheckbox(f.name, o, e.target.checked)
                                }
                              />
                              {o}
                            </label>
                          ))}
                        </div>
                      )}

                      {errors[f.name] && (
                        <div className="w-full flex justify-center mt-2">
                          <p className="text-xs text-red-500 font-medium">
                            ⚠ {errors[f.name]}
                          </p>
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-6 border-t flex items-center gap-3">
              {/* SUBMIT BUTTON */}
              <button
                onClick={handleSubmit}
                className="px-6 py-2 cursor-pointer rounded-md bg-blue-700 text-white text-sm font-medium shadow hover:shadow-md hover:scale-[1.02] transition"
              >
                Submit
              </button>
              {/* EDIT BUTTON */}
              <button
                onClick={() => {
                  setPreview(false);
                  setShowData(false);
                }}
                className="px-5 py-2 cursor-pointer rounded-md border text-sm  shadow hover:shadow-md hover:scale-[1.02] transition"
              >
                Edit Form
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
