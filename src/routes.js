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
      key: "info/dashboard",
      path: "/dashboard",
      title: "Dashboard",
      component: Dashboard,
      icon: DashboardOutlined
    },
    {
      key: "info/queue",
      path: "/queue",
      title: "Queue",
      component: Queue,
      icon: OrderedListOutlined
    }
  ]
};
export default routes;
