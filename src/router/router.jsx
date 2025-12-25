import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import SignUp from './../Pages/SignUp';
import NotFoundPage from './../Pages/ErrorPage';
import Home from "../Pages/Home";
import Courses from "../Pages/Courses";
import CourseDetail from "../Pages/CourseDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/signup",
        element: <SignUp />
      },
      {
        path: "/courses",
        element: <Courses />
      },
      {
        path: "/course/:id",
        element: <CourseDetail />
      }
    ]
  }
]);

export default router;