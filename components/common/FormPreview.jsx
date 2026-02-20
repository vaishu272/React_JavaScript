export default function FormPreview({
  fields,
  formTitle,
  formDesc,
  previewMode,
  setSelectedField,
}) {
  return (
    <div className="max-w-xl mx-auto space-y-4">
      {/* FORM TITLE */}
      <h2 className="text-xl font-semibold">{formTitle}</h2>
      <p className="text-gray-500 mb-4">{formDesc}</p>

      {/* FIELDS */}
      {fields.map((field) => (
        <div
          key={field.id}
          className="border p-4 rounded cursor-pointer"
          onClick={() => !previewMode && setSelectedField(field)}
        >
          <label className="block font-medium mb-2">{field.label}</label>

          {/* TEXT INPUT */}
          {field.type === "text" && (
            <input
              placeholder="Your answer"
              className="border p-2 rounded w-full"
            />
          )}

          {/* DROPDOWN */}
          {field.type === "dropdown" && (
            <select className="border p-2 rounded w-full">
              <option>Choose an option</option>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          )}

          {/* RADIO */}
          {field.type === "radio" && (
            <div className="space-y-2">
              <label className="flex gap-2">
                <input type="radio" name={field.id} /> Male
              </label>
              <label className="flex gap-2">
                <input type="radio" name={field.id} /> Female
              </label>
            </div>
          )}

          {/* CHECKBOX */}
          {field.type === "checkbox" && (
            <label className="flex gap-2">
              <input type="checkbox" />I agree to all terms and conditions
            </label>
          )}
        </div>
      ))}

      {/* SUBMIT BUTTON IN PREVIEW */}
      {previewMode && (
        <button className="bg-gray-600 text-white px-6 py-2 rounded">
          Submit
        </button>
      )}
    </div>
  );
}
