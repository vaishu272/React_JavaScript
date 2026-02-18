import { NavLink } from "react-router-dom";

const navLinkClass = ({ isActive }) =>
  `px-3 py-1 rounded-md transition ${
    isActive
      ? "bg-primary text-primary-foreground"
      : "text-muted-foreground hover:text-foreground hover:bg-muted"
  }`;

export function Navbar() {
  return (
    <header className="w-full border-b bg-background">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-center px-6">
        <nav className="flex gap-4 text-base font-bold">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/dashboard" className={navLinkClass}>
            Dashboard
          </NavLink>

          <NavLink to="/profile" className={navLinkClass}>
            Profile
          </NavLink>

          <NavLink to="/login" className={navLinkClass}>
            Login
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
