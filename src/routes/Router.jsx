import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Shop from "./pages/Shop";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
    ],
  },
]);

export default router;
