import { createBrowserRouter } from "react-router-dom";
import MainRout from "../Pages/MainRout";
import HomePage from "../Pages/HomePage";
import CommunityPage from "../Pages/CommunityPage";
import NotFoundPage from "../Pages/NotFoundPage";
import SignPage from "../Pages/SignPage";
import ProfilePage from "../Pages/ProfilePage";

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
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "sign",
        element: <SignPage />
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
