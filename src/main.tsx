import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MantineProvider } from "@mantine/core";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NarutoPgae from "./pages/narutoPgae";
import ItemsPage from "./pages/itemsPage";
import Root from "./App";
import HomePage from "./pages/homePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/naruto",
        element: <NarutoPgae />,
      },

      {
        path: "/items",
        element: <ItemsPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);
