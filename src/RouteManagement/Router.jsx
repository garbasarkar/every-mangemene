import { createBrowserRouter } from "react-router-dom";
import Roots from "./Roots";
import Service from "../ServiceManagement/Service";
import Login from "../RegisterPage/Login";
import Register from "../RegisterPage/Register";
import DetalisPro from "../ServiceManagement/DetalisPro";
import SpecialRouter from "../AuthProvider/SpecialRouter";
import Meeting from "../PrivateRouterDesign/Meeting";
import Conference from "../PrivateRouterDesign/Conference";
import ServicesPage from "../ServiceManagement/ServicesPage";
import AboutPage from "../ServiceManagement/AboutPage";
import HomePage from "../ServiceManagement/HomePage";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Service></Service>,
      },
      {
        path: "/home",
        element: <HomePage></HomePage>,
      },
      {
        path: "/about",
        element: <AboutPage></AboutPage>,
      },
      {
        path: "/service",
        element: <ServicesPage></ServicesPage>,
      },
      {
        path: "/show/:id",
        element: (
          <SpecialRouter>
            <DetalisPro></DetalisPro>
          </SpecialRouter>
        ),
        loader: () => fetch(`/ProService.json`),
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
        path: "/meeting",
        element: <Meeting></Meeting>,
        loader: () => fetch(`/Meeting.json`),
      },
      {
        path: "/conference",
        element: <Conference></Conference>,
      },
    ],
  },
]);

export default router;
