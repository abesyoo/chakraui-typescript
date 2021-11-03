import { Home } from "../components/pages/Home";
import { Page404 } from "../components/pages/Page404";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";

export const homeRoutes = [
  {
    path: "/",
    exact: true,
    childern: <Home />
  },
  {
    path: "/user_management",
    exact: false,
    childern: <UserManagement />
  },
  {
    path: "/setting",
    exact: false,
    childern: <Setting />
  },
  {
    path: "*",
    exact: false,
    childern: <Page404 />
  }
];
