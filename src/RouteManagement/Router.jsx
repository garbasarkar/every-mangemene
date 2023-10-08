import { createBrowserRouter } from "react-router-dom";
import Roots from "./Roots";
import Service from "../ServiceManagement/Service";
import Login from "../RegisterPage/Login";
import Register from "../RegisterPage/Register";
import ProducService from "../ServiceManagement/ProducService";
import DetalisPro from "../ServiceManagement/DetalisPro";
import SpecialRouter from "../AuthProvider/SpecialRouter";
import Meeting from "../PrivateRouterDesign/Meeting";
import Conference from "../PrivateRouterDesign/Conference";

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
        element: <SpecialRouter><DetalisPro></DetalisPro></SpecialRouter>,
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
      {
        path: '/meeting',
        element: <Meeting></Meeting>,
        loader: () => fetch(`/Meeting.json`)
      },
      {
        path: '/conference',
        element: <Conference></Conference>
      }
    ],
  },
]);

export default router;
