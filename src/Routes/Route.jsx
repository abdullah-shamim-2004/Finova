import { createBrowserRouter } from "react-router";
import DashboardLayout from "../Layouts/DashboardLayout";
import DashboardHome from "../Pages/Dashboard/DashboardHome";

const route = createBrowserRouter([
  {
    path: "/",
    Component: DashboardLayout,
    children: [
      {
        index: true,
        Component: DashboardHome,
      },
    ],
  },
]);
export default route;
