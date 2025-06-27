import { createBrowserRouter, RouterProvider } from "react-router";
import { DashboardHomePage } from "./pages/dashboard/home";
import { DashboardProjectPage } from "./pages/dashboard/projects/[id]";

export const createAppRouter = () =>
  createBrowserRouter([
    {
      path: "/dashboard/home",
      element: <DashboardHomePage />,
    },
    {
      path: "/dashboard/projects/:projectId",
      element: <DashboardProjectPage />,
    },
  ]);

export function AppRouter() {
  return <RouterProvider router={createAppRouter()} />;
}
