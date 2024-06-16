import { createBrowserRouter } from "react-router-dom";
import MainRout from "../Pages/MainRout";
import HomePage from "../Pages/HomePage";
import CommunityPage from "../Pages/CommunityPage";
import ServicePage from "../Pages/ServicePage";
import StudyPage from "../Pages/StudyPage";
import NotFoundPage from "../Pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "community",
        element: <CommunityPage />,
      },
      {
        path: "service",
        element: <ServicePage />,
      },
      {
        path: "study",
        element: <StudyPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
