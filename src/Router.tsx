import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Layout } from "./pages/Layout";
import { NotFound } from "./pages/NotFound";
import { AnimalDetails } from "./pages/AnimalDetails";
import { Animals } from "./pages/Animals";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/animals",
        element: <Animals />,
      },
      {
        path: "/animal-details/:id",
        element: <AnimalDetails />,
      },
    ],
  },
]);
