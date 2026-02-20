// Renders fields inside builder (not preview mode)

export default function FormRenderer({
  fields,
  setSelectedField,
  deleteField,
}) {
  return (
    <div className="space-y-4">
      {fields.map((f) => (
        <div
          key={f.id}
          onClick={() => setSelectedField(f)}
          className="relative border rounded-xl p-4 hover:border-black transition"
        >
          {/* DELETE BUTTON */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              deleteField(f.id);
            }}
            className="
    absolute cursor-pointer top-2 right-3
    w-7 h-6 flex items-center justify-center
    rounded-full bg-red-400 text-white
    hover:bg-red-500 shadow-sm
    text-xs
    transition
  "
          >
            🗙
          </button>

          {f.type === "title" ? (
            <h3 className="text-lg font-semibold">{f.label}</h3>
          ) : (
            <>
              <label className="block font-medium mb-2">{f.label}</label>

              {f.type === "text" && (
                <input
                  type={f.inputType || "text"}
                  className="border p-2 rounded w-full"
                  placeholder={f.placeholder}
                  disabled
                />
              )}

              {f.type === "dropdown" && (
                <select className="border p-2 rounded w-full" disabled>
                  {f.options.map((o, i) => (
                    <option key={i}>{o}</option>
                  ))}
                </select>
              )}

              {f.type === "radio" &&
                f.options.map((o, i) => (
                  <label key={i} className="block">
                    <input type="radio" disabled /> {o}
                  </label>
                ))}

              {f.type === "checkbox" &&
                f.options.map((o, i) => (
                  <label key={i} className="flex gap-2">
                    <input type="checkbox" disabled /> {o}
                  </label>
                ))}
            </>
          )}
        </div>
      ))}
    </div>
  );
}
