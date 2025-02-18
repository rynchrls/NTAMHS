import { createBrowserRouter } from "react-router-dom";
import AdminPage from "../pages/admin/AdminPage";

const route = createBrowserRouter([
  {
    path: "/",
    element: <AdminPage />,
    errorElement: <div>Not Found</div>,
  },
]);

export default route;
