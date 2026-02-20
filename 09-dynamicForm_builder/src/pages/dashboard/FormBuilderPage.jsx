import { useState } from "react";
import Navbar from "../../components/layout/Navbar";
import FieldEditor from "../../components/common/FieldEditor";
import FieldSettings from "../../components/common/FieldSettings";
import FormRenderer from "../../components/common/FormRenderer";
import FormPreview from "../../components/common/FormPreview";
import ResponseViewer from "../../components/common/ResponseViewer";
import { clearSubmissions } from "../../lib/storageService";

export default function FormBuilderPage() {
  const [fields, setFields] = useState([]);
  const [selected, setSelected] = useState(null);
  const [preview, setPreview] = useState(false);
  const [showData, setShowData] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [fieldId, setFieldId] = useState(1);
  const [triedPreview, setTriedPreview] = useState(false);

  // ADD FIELD (FIXED VERSION)
  function addField(type) {
    const newField = {
      id: fieldId,
      type,
      label: type === "title" ? "Section Title" : "New Field",

      // unified naming
      name: "field_" + fieldId,

      placeholder: "Your answer",
      required: false,

      inputType: type === "text" ? "text" : undefined,

      options:
        type === "dropdown" || type === "radio" || type === "checkbox"
          ? ["Option 1", "Option 2"]
          : [],

      defaultValue:
        type === "dropdown" || type === "radio"
          ? "Option 1"
          : type === "checkbox"
            ? []
            : "",
    };

    setFields([...fields, newField]);
    setFieldId(fieldId + 1);
    setSelected(newField);
    setShowData(false);
  }

  // UPDATE FIELD SETTINGS
  const updateField = (updated) => {
    setFields(fields.map((f) => (f.id === updated.id ? updated : f)));
    setSelected(updated);
  };

  // DELETE FIELD SETTINGS
  const deleteField = (id) => {
    setFields(fields.filter((f) => f.id !== id));

    // reset selected field if deleted
    if (selected?.id === id) {
      setSelected(null);
    }
  };

  // VALIDATION: form must have title + at least one field + labels filled
  const isFormValid =
    title.trim() !== "" &&
    fields.length > 0 &&
    fields.every((f) => f.label && f.label.trim() !== "");

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Navbar />

        {preview ? (
          <FormPreview
            fields={fields}
            title={title}
            desc={desc}
            setPreview={setPreview}
            setShowData={setShowData}
            onEdit={() => setPreview(false)}
          />
        ) : (
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
            {/* BUILDER */}

            <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-sm border">
              {/* FORM TITLE & DESCRIPTION */}
              <div className="flex flex-col">
                <input
                  className="
      text-2xl font-semibold w-full outline-none
      border-b pb-3
      focus:border-black transition
      placeholder:text-gray-400
    "
                  style={{ marginBottom: "28px" }}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Form title"
                />

                <textarea
                  rows={2}
                  className="
      w-full outline-none border-b pb-3 resize-none
      focus:border-black transition text-gray-600
      placeholder:text-gray-400
    "
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  placeholder="Form description"
                />
              </div>

              {/* FIELDS */}
              <div className="pt-8 space-y-4">
                <FormRenderer
                  fields={fields}
                  setSelectedField={(f) => {
                    setSelected(f);
                    setShowData(false);
                  }}
                  deleteField={deleteField}
                />
              </div>

              {/* ADD FIELD */}
              <div className="mt-2 pt-2">
                <FieldEditor addField={addField} />
              </div>

              {/* ACTIONS */}
              <div className="border-t pt-6 space-y-3">
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => {
                      setTriedPreview(true);

                      if (isFormValid) {
                        setPreview(true);
                      }
                    }}
                    className={`
    px-6 py-2 rounded-md text-sm font-medium transition
    ${
      isFormValid
        ? "bg-blue-700 text-white hover:opacity-90"
        : "bg-gray-300 text-gray-600 hover:bg-gray-400"
    }
  `}
                  >
                    Preview Form
                  </button>

                  <button
                    className="px-6 py-2 rounded-md text-sm border bg-white hover:bg-gray-50 transition"
                    onClick={() => setShowData(!showData)}
                  >
                    View Data
                  </button>

                  <button
                    onClick={() => {
                      clearSubmissions();
                      setShowData(false);
                      setTimeout(() => setShowData(true), 10);
                    }}
                    className="text-xs text-red-500 hover:text-red-600 hover:underline ml-auto"
                  >
                    Clear submissions
                  </button>
                </div>

                {triedPreview && !isFormValid && (
                  <p className="text-sm text-red-400">
                    Add form title & at least one labeled field to preview
                  </p>
                )}
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border">
              {showData ? (
                <ResponseViewer />
              ) : selected ? (
                <FieldSettings field={selected} updateField={updateField} />
              ) : (
                <div className="text-center py-16 text-gray-400">
                  <p className="text-sm">No field selected</p>
                  <p className="text-xs mt-1">
                    Click a field to edit its settings
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
