import { createBrowserRouter, RouterProvider } from "react-router";
import { LandingPage } from "./pages/landing";
import { DashboardBoardListPage } from "./pages/dashboard/boards/list";
import { DashboardBoardDetailsPage } from "./pages/dashboard/boards/details";

export const createAppRouter = () =>
  createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/dashboard/boards",
      element: <DashboardBoardListPage />,
    },
    {
      path: "/dashboard/boards/:boardId",
      element: <DashboardBoardDetailsPage />,
    },
  ]);

export function AppRouter() {
  return <RouterProvider router={createAppRouter()} />;
}
