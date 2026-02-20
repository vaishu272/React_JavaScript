import { useState } from "react";

export default function FieldEditor({ addField }) {
  const [show, setShow] = useState(false);

  const handleAdd = (type) => {
    addField(type);
    setShow(false);
  };

  return (
    <div className="border border-dashed rounded-xl p-6 text-center bg-gray-50 hover:bg-gray-100 transition">
      <button
        onClick={() => setShow(!show)}
        className="text-gray-600 font-medium"
      >
        + Add Field
      </button>

      {show && (
        <div className="bg-white shadow-xl p-3 rounded-lg mt-3 text-left w-60 mx-auto border">
          <button
            onClick={() => handleAdd("text")}
            className="block w-full text-left p-2 rounded hover:bg-gray-100"
          >
            Input Field
          </button>
          <button
            onClick={() => handleAdd("dropdown")}
            className="block w-full text-left p-2 rounded hover:bg-gray-100"
          >
            Dropdown
          </button>
          <button
            onClick={() => handleAdd("radio")}
            className="block w-full text-left p-2 rounded hover:bg-gray-100"
          >
            Radio Buttons
          </button>
          <button
            onClick={() => handleAdd("checkbox")}
            className="block w-full text-left p-2 rounded hover:bg-gray-100"
          >
            Checkbox
          </button>
        </div>
      )}
    </div>
  );
}
