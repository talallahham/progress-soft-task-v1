import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import HomePage from "./pages/Home/Home";
import ShowPage from "./pages/Show/Show";
import { getDeals } from "./global/api";

const router = createBrowserRouter([
  {
    path: "*",
    loader: () => {
      return redirect("/");
    },
  },

  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: "/show",
    element: <ShowPage />,
    loader: async () => {
      const deals = await getDeals();
      return deals;
    },
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
