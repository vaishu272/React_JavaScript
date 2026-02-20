/*
  STORAGE SERVICE
  Handles all localStorage interactions
  Keeps storage logic separate from UI
*/

const STORAGE_KEY = "form_submissions";

// Get all submissions
export function getSubmissions() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

// Save new submission
export function saveSubmission({ title, desc, values }) {
  const existing = getSubmissions();

  const newEntry = {
    date: new Date().toLocaleString(),
    title,
    desc,
    values,
  };

  const updated = [...existing, newEntry];

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

  return updated;
}

// Clear submissions (optional helper)
export function clearSubmissions() {
  localStorage.removeItem(STORAGE_KEY);
}
