import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Users from "./screens/Users";
import User from "./screens/User";
import NotFound from "./screens/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Users />,
      },
      {
        path: ":id",
        element: <User />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
