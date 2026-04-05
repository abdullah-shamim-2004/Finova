import { createBrowserRouter } from "react-router";
import DashboardLayout from "../Layouts/DashboardLayout";
import DashboardHome from "../Pages/Dashboard/DashboardHome";
import Transactions from "../Pages/Dashboard/Transactions";
import Insights from "../Pages/Dashboard/Insights";

const route = createBrowserRouter([
  {
    path: "/",
    Component: DashboardLayout,
    children: [
      {
        index: true,
        Component: DashboardHome,
      },
      {
        path: "/transactions",
        Component: Transactions,
      },
      {
        path: "/insights",
        Component: Insights,
      },
    ],
  },
]);
export default route;
