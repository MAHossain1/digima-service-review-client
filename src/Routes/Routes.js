import { createBrowserRouter } from "react-router-dom";

import Main from "../Layout/Main";
import Login from "../Pages/Auth/Login/Login";
import SignUp from "../Pages/Auth/SignUp/SignUp";
import Home from "../Pages/Home/Home/Home";
import ServiceAndReview from "../Pages/Services/ServiceAndReview";
import ServicesFull from "../Pages/Services/ServicesFull";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <ServicesFull></ServicesFull>,
      },
      {
        path: "/services/:id",
        element: <ServiceAndReview></ServiceAndReview>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
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
