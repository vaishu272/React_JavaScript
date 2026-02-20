import { makeName } from "../../lib/makeName";

export default function FieldSettings({ field, updateField }) {
  if (!field) return null;

  const update = (key, value) => {
    const updated = { ...field, [key]: value };

    if (key === "label") {
      updated.name = makeName(value);
    }

    updateField(updated);
  };

  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg">Field Settings</h2>

      <div>
        <label className="text-sm">Field Label</label>
        <input
          className="w-full border p-2 rounded"
          value={field.label}
          onChange={(e) => update("label", e.target.value)}
        />
      </div>

      <div>
        <label className="text-sm">Data Name</label>
        <input
          className="w-full border p-2 rounded bg-gray-100"
          value={field.name}
          readOnly
        />
      </div>

      <div>
        <label className="text-sm">Placeholder</label>
        <input
          className="w-full border p-2 rounded"
          value={field.placeholder || ""}
          onChange={(e) => update("placeholder", e.target.value)}
        />
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={field.required}
          onChange={(e) => update("required", e.target.checked)}
        />
        <span className="text-sm">Required Field</span>
      </div>
    </div>
  );
}
