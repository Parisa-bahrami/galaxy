import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

import "./App.css";

import Layout from "./component/layout/Layout";
import Mercury from "./component/pages/mercury/Mercury";
import Venus from "./component/pages/Venus";
import Mars from "./component/pages/Mars";
import Uranus from "./component/pages/Uranus";
import Neptune from "./component/pages/Neptune";
import Jupiter from "./component/pages/Jupiter";
import Saturn from "./component/pages/Saturn";
import Earth from "./component/pages/Earth";
import Home from "./component/pages/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/Mercury",
          element: <Mercury />,
        },
        {
          path: "/Venus",
          element: <Venus />,
        },
        {
          path: "/Earth",
          element: <Earth />,
        },
        {
          path: "/Mars",
          element: <Mars />,
        },
        {
          path: "/Jupiter",
          element: <Jupiter />,
        },
        {
          path: "/Saturn",
          element: <Saturn />,
        },

        {
          path: "/Uranus",
          element: <Uranus />,
        },

        {
          path: "/Neptune",
          element: <Neptune />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
