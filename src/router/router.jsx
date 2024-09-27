import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/not-found";
import Programacao from "../pages/programacao";
import Home from "../pages/home";
import Palestrantes from "../pages/palestrantes";

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
        element: <Palestrantes />,
      },
    ],
  },
]);

export default router;
