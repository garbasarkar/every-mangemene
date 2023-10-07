import { createBrowserRouter } from "react-router-dom";
import Roots from "./Roots";
import Service from "../ServiceManagement/Service";
import Login from "../RegisterPage/Login";
import Register from "../RegisterPage/Register";
import ProducService from "../ServiceManagement/ProducService";
import DetalisPro from "../ServiceManagement/DetalisPro";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children: [
      {
        path: "/",
        element: <Service></Service>,
      },
      {
        path: "/show/:id",
        element: <DetalisPro></DetalisPro>,
        loader: () => fetch(`/ProService.json`)
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
