import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import AuthProvider from "./AuthProvider";
import ErrorPage from "./ErrorPage";
import DetailsPage from "./DetailsPage";
import PrivateRoute from "./PrivateRoute";
import { HelmetProvider } from "react-helmet-async";
import MyProfile from "./MyProfile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UpdateProfile from "./UpdateProfile";
import Dashboard from "./Dashboard";
import Review from "./Review";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      // { path: "", element: <Navigate to={"/login"}></Navigate> },
      {
        path: "/",
        element: <Home></Home>,
        children: [],
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/review",
        element: <Review></Review>,
      },
      {
        path: "/details/:id",
        loader: ({ params }) => fetch("data.json"),
        element: (
          <PrivateRoute>
            <DetailsPage></DetailsPage>
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateprofile",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>
);
