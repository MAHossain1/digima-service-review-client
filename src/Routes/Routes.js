import { createBrowserRouter } from "react-router-dom";

import Main from "../Layout/Main";
import AddService from "../Pages/AddService/AddService";
import Login from "../Pages/Auth/Login/Login";
import SignUp from "../Pages/Auth/SignUp/SignUp";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home/Home";
import MyReview from "../Pages/MyReview/MyReview";
import ServiceAndReview from "../Pages/Services/ServiceAndReview";
import ServicesFull from "../Pages/Services/ServicesFull";
import RequireAuth from "./Private/RequireAuth";

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
        path: "/myreview",
        element: (
          <RequireAuth>
            <MyReview></MyReview>
          </RequireAuth>
        ),
      },
      {
        path: "/addservice",
        element: (
          <RequireAuth>
            <AddService></AddService>
          </RequireAuth>
        ),
      },
      {
        path: "/services/:id",
        element: <ServiceAndReview></ServiceAndReview>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/blog",
        element: (
          <RequireAuth>
            <Blog></Blog>
          </RequireAuth>
        ),
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
