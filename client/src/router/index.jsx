import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";

import Home from "../pages/Home/Home";
import Search from "../pages/Search/Search";
import AnimeDetails from "../pages/AnimeDetails/AnimeDetails";
import Playlists from "../pages/Playlists/Playlists";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/search", element: <Search /> },
      { path: "/anime", element: <AnimeDetails /> },
      { path: "/playlists", element: <Playlists /> },
    ],
  },
]);
