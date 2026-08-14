import React from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import NotFoundPage from "./components/NotFoundPage";

// Auth Pages
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";

// Protect Page
import ProtectedRoute from "./ProtectedRoute";

// Dashboard Pages
import DashboardLayout from "./layouts/DashboardLayout";
import DashboardHome from "./pages/dashboard/DashboardHome";
import Profile from "./pages/dashboard/Profile";
import Orders from "./pages/dashboard/Orders";
import Settings from "./pages/dashboard/Settings";
import Contact from "./pages/dashboard/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        element: <ProtectedRoute />,
        children: [{ path: "/cart", element: <Cart /> }],
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          { path: "/dashboard", element: <DashboardHome /> },
          { path: "/dashboard/profile", element: <Profile /> },
          { path: "/dashboard/orders", element: <Orders /> },
          { path: "/dashboard/settings", element: <Settings /> },
          { path: "/dashboard/contact", element: <Contact /> },
        ],
      },
    ],
  },
]);

export default router;
