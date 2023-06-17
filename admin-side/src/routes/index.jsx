import { createBrowserRouter, redirect } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import Dashboard from "../pages/Dashboard";
import Category from "../pages/Category";
import RegisterPage from "../pages/RegisterPage";


const router = createBrowserRouter([
  {
    element: <HomePage />,
    loader: () => {
      const access_token = localStorage.getItem("access_token");
      if (!access_token) throw redirect("/login");

      return null;
    },
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/categories',
        element: <Category />,
      },
      {
        path: '/register',
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "/login",
    loader: () => {
      const access_token = localStorage.getItem("access_token");
      if (access_token) throw redirect("/");

      return null;
    },
    element: <LoginPage />,
  },
]);

export default router;

