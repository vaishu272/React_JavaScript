import { NavLink } from "react-router-dom";

export function Sidebar() {
  const linkClass = ({ isActive }) =>
    `block rounded px-3 py-2 text-sm ${
      isActive ? "bg-primary text-primary-foreground" : "hover:bg-muted"
    }`;

  return (
    <aside className="w-56 border-r bg-background p-4">
      <h2 className="mb-4 text-lg font-semibold">Dashboard</h2>

      <nav className="space-y-1">
        <NavLink to="/dashboard" end className={linkClass}>
          Overview
        </NavLink>

        <NavLink to="/dashboard/reports" className={linkClass}>
          Reports
        </NavLink>

        <NavLink to="/dashboard/settings" className={linkClass}>
          Settings
        </NavLink>
      </nav>
    </aside>
  );
}
