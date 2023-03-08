import { createBrowserRouter } from "react-router-dom";

import Main from "../Layout/Main";
import Login from "../Pages/Auth/Login/Login";
import SignUp from "../Pages/Auth/SignUp/SignUp";
import Home from "../Pages/Home/Home/Home";
import ServicesFull from "../Pages/Services/ServicesFull";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <ServicesFull></ServicesFull>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default router;
