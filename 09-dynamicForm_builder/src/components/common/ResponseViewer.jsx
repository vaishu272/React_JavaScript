import { getSubmissions } from "../../lib/storageService";

export default function ResponseViewer() {
  const responses = getSubmissions();

  if (!responses.length)
    return (
      <p className="text-gray-400 text-sm text-center mt-10">
        No submissions yet
      </p>
    );

  return (
    <div className="space-y-5">
      <h3 className="font-semibold text-lg">Form Submissions</h3>

      {responses.map((r, i) => (
        <div key={i} className="bg-white border rounded-xl p-5 shadow-sm">
          {/* FORM TITLE */}
          {r.title && <h4 className="text-lg font-bold">{r.title}</h4>}

          {/* FORM DESCRIPTION */}
          {r.desc && <p className="text-sm text-gray-500 mb-4">{r.desc}</p>}

          {/* FIELDS */}
          <div className="space-y-3">
            {Object.entries(r.values).map(([k, v]) => (
              <div key={k}>
                <p className="text-xs uppercase text-gray-400 tracking-wide">
                  {k}
                </p>
                <p className="text-sm text-gray-800">
                  {Array.isArray(v) ? v.join(", ") : String(v)}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
