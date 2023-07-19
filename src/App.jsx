import React from "react";
import Signup from "./Pages/Authentication/Signup/Signup";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Pages/Authentication/Login/Login";
import Main from "./Layout/Main/Main";
import Home from "./Pages/Home/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);
const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
