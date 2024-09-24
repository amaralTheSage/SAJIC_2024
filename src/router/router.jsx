import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/not-found";
import Programacao from "../pages/programacao";
import Home from "../pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/programacao",
        element: <Programacao />,
      },
      {
        path: "/palestrantes",
        element: <ErrorPage />,
      },
      {
        path: "/inscricao",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;