import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

export default function Dashboard() {
  return (
    <div className="flex min-h-svh">
      <Sidebar />

      <div className="flex-1">
        <Header />

        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
