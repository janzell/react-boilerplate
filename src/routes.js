/**
 * Attributes
 * path
 * component
 */
import Dashboard from "./pages/info/dashboard";
import Queue from "./pages/info/queue";
import { DashboardOutlined, OrderedListOutlined } from "@ant-design/icons";

const routes = {
  // Information department paths
  info: [
    {
      path: "/dashboard",
      title: "Dashboard",
      component: Dashboard,
      icon: DashboardOutlined
    },
    {
      path: "/queue",
      title: "Queue",
      component: Queue,
      icon: OrderedListOutlined
    }
  ]
};
export default routes;
