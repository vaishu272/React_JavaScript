import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import Dashboard from "@/features/dashboard/Dashboard";
import "./index.css";
import "antd/dist/reset.css";
import Profile from "@/features/profile/Profile";
import Login from "@/features/auth/Login";
import Home from "@/features/home/Home";
import Overview from "@/features/dashboard/Overview";
import Reports from "@/features/dashboard/Reports";
import Settings from "@/features/dashboard/Settings";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          { index: true, element: <Overview /> },
          { path: "reports", element: <Reports /> },
          { path: "settings", element: <Settings /> },
        ],
      },

      {
        path: "/profile",
        element: <Profile />,
      },

      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
