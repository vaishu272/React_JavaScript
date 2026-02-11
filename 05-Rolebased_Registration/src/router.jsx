import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import DashboardLayout from "./layouts/DashboardLayout";
import Stage1 from "./pages/Stage1";
import Stage2 from "./pages/Stage2";
import Stage3Wrapper from "./pages/stage3Wrapper";
import Success from "./pages/Success";
import NotFound from "./NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },

      {
        path: "register",
        element: <DashboardLayout />,
        children: [
          { path: "stage-1", element: <Stage1 /> },
          { path: "stage-2", element: <Stage2 /> },
          { path: "stage-3", element: <Stage3Wrapper /> },
          { path: "success", element: <Success /> },
        ],
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
