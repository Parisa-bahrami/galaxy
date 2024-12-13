import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

import "./App.css";

import Layout from "./component/layout/Layout";
import Mercury from "./component/pages/mercury/Mercury";
import Venus from "./component/pages/venus/Venus";
import Mars from "./component/pages/mars/Mars";
import Uranus from "./component/pages/uranus/Uranus";
import Neptune from "./component/pages/neptune/Neptune";
import Jupiter from "./component/pages/jupiter/Jupiter";
import Saturn from "./component/pages/saturn/Saturn";
import Earth from "./component/pages/earth/Earth";
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
