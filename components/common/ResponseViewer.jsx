export default function ResponseViewer({ responses }) {
  if (!responses.length) return null;

  return (
    <div className="mt-6">
      <h3 className="font-semibold mb-2">Form Submissions</h3>

      {responses.map((r, i) => (
        <pre key={i} className="bg-gray-100 p-3 rounded mb-3">
          {JSON.stringify(r, null, 2)}
        </pre>
      ))}
    </div>
  );
}
