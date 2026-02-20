import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { makeName } from "../../lib/makeName";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";

/*
  FieldSettings
  Controls editing of selected field
  Supports:
  - label editing
  - placeholder editing
  - required toggle
  - dynamic option editing for dropdown/radio/checkbox
*/

export default function FieldSettings({ field, updateField }) {
  if (!field)
    return (
      <p className="text-gray-400 text-sm">
        Select a field to edit its settings
      </p>
    );

  // update any property
  const update = (key, value) => {
    const updated = { ...field, [key]: value };

    // auto-generate data name when label changes
    if (key === "label") {
      updated.name = makeName(value);
    }

    updateField(updated);
  };

  // add new option
  const addOption = () => {
    update("options", [...(field.options || []), "New Option"]);
  };

  // change option text
  const updateOption = (index, value) => {
    const newOptions = [...field.options];
    newOptions[index] = value;
    update("options", newOptions);
  };

  // remove option
  const removeOption = (index) => {
    const newOptions = field.options.filter((_, i) => i !== index);
    update("options", newOptions);
  };

  return (
    <>
      <div className="space-y-6">
        {/* HEADER */}
        <div className="border-b pb-3">
          <h2 className="font-semibold text-lg">Field Settings</h2>
          <p className="text-xs text-gray-400">Customize the selected field</p>
        </div>

        {/* LABEL */}
        <div className="space-y-1">
          <label className="text-sm font-medium">Field Label</label>
          <Input
            value={field.label}
            onChange={(e) => update("label", e.target.value)}
          />
        </div>

        {/* DATA NAME */}
        <div className="space-y-1">
          <label className="text-sm font-medium">Data Name</label>
          <Input
            value={field.name}
            readOnly
            className="bg-gray-100 text-gray-500"
          />
        </div>

        {/* TEXT FIELD SETTINGS */}
        {field.type === "text" && (
          <div className="space-y-4 pt-2 border-t">
            <div className="space-y-1">
              <label className="text-sm font-medium">Placeholder</label>
              <Input
                value={field.placeholder || ""}
                onChange={(e) => update("placeholder", e.target.value)}
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium">Input Type</label>

              <select
                className="
                w-full border rounded-md px-3 py-2 text-sm
                focus:outline-none focus:ring-2 focus:ring-black
                bg-white
              "
                value={field.inputType || "text"}
                onChange={(e) =>
                  updateField({ ...field, inputType: e.target.value })
                }
              >
                <option value="text">Text</option>
                <option value="email">Email</option>
                <option value="password">Password</option>
                <option value="number">Number</option>
                <option value="date">Date</option>
                <option value="tel">Phone</option>
              </select>
            </div>
          </div>
        )}

        {/* REQUIRED */}
        {field.type !== "title" && (
          <div className="flex items-center justify-between pt-3 border-t">
            <span className="text-sm font-medium">Required Field</span>
            <Switch
              checked={field.required}
              onCheckedChange={(v) => update("required", v)}
            />
          </div>
        )}

        {/* OPTIONS EDITOR */}
        {(field.type === "dropdown" ||
          field.type === "radio" ||
          field.type === "checkbox") && (
          <div className="space-y-4 pt-3 border-t">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Options</label>
            </div>

            <div className="space-y-2">
              {field.options?.map((opt, i) => (
                <div key={i} className="flex gap-2 items-center">
                  <Input
                    value={opt}
                    onChange={(e) => updateOption(i, e.target.value)}
                  />

                  <Button
                    size="icon"
                    variant="destructive"
                    onClick={() => removeOption(i)}
                  >
                    <DeleteOutlined />
                  </Button>
                </div>
              ))}
            </div>

            <Button className="w-full" variant="secondary" onClick={addOption}>
              <PlusOutlined className="mr-2" />
              Add Option
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
