import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import SignUp from './../Pages/SignUp';
import NotFoundPage from './../Pages/ErrorPage';
import Home from "../Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage/>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/signup",
        element: <SignUp />
      },
    ]
  }
]);

export default router;