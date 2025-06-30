import { createBrowserRouter, RouterProvider } from "react-router";
import { LandingPage } from "./pages/landing";
import { DashboardProjectListPage } from "./pages/dashboard/projects/list";
import { DashboardCreateProjectPage } from "./pages/dashboard/projects/create";
import { DashboardProjectPage } from "./pages/dashboard/projects/[id]";

export const createAppRouter = () =>
  createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/dashboard/projects",
      element: <DashboardProjectListPage />,
    },
    {
      path: "/dashboard/projects/create",
      element: <DashboardCreateProjectPage />,
    },
    {
      path: "/dashboard/projects/:projectId",
      element: <DashboardProjectPage />,
    },
  ]);

export function AppRouter() {
  return <RouterProvider router={createAppRouter()} />;
}
