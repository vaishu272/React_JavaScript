import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <div className="min-h-svh bg-background">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
