export default function FormRenderer({
  fields,
  values,
  setValues,
  previewMode,
  setSelectedField,
}) {
  const setValue = (name, val) => {
    setValues((prev) => ({
      ...prev,
      [name]: val,
    }));
  };

  const handleCheckbox = (name, option, checked) => {
    setValues((prev) => {
      const list = prev[name] || [];

      if (checked) {
        return { ...prev, [name]: [...list, option] };
      }

      return {
        ...prev,
        [name]: list.filter((v) => v !== option),
      };
    });
  };

  return (
    <div className="space-y-5">
      {fields.map((f) => (
        <div
          key={f.id}
          className="border p-4 rounded cursor-pointer"
          onClick={() => !previewMode && setSelectedField(f)}
        >
          <label className="block font-medium mb-2">{f.label}</label>

          {/* TEXT */}
          {f.type === "text" && (
            <input
              className="border p-2 rounded w-full"
              placeholder={f.placeholder}
              value={values[f.name] || ""}
              onChange={(e) => setValue(f.name, e.target.value)}
            />
          )}

          {/* DROPDOWN */}
          {f.type === "dropdown" && (
            <select
              className="border p-2 rounded w-full"
              value={values[f.name] || ""}
              onChange={(e) => setValue(f.name, e.target.value)}
            >
              <option value="">Select option</option>
              {f.options.map((o, i) => (
                <option key={i} value={o}>
                  {o}
                </option>
              ))}
            </select>
          )}

          {/* RADIO */}
          {f.type === "radio" &&
            f.options.map((o, i) => (
              <label key={i} className="flex gap-2">
                <input
                  type="radio"
                  name={f.id}
                  checked={values[f.name] === o}
                  onChange={() => setValue(f.name, o)}
                />
                {o}
              </label>
            ))}

          {/* CHECKBOX */}
          {f.type === "checkbox" &&
            f.options.map((o, i) => (
              <label key={i} className="flex gap-2">
                <input
                  type="checkbox"
                  checked={(values[f.name] || []).includes(o)}
                  onChange={(e) => handleCheckbox(f.name, o, e.target.checked)}
                />
                {o}
              </label>
            ))}
        </div>
      ))}
    </div>
  );
}
