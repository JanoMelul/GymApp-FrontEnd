import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import "./App.css";

import Login from "./pages/Login";
import Home from "./pages/client/Home";
import PageNotFound from "./pages/PageNotFound";
import Protected from "./security/Protected/Protected";
import Profile from "./pages/client/Profile";
import Register from "./pages/Register";
import AboutUs from "./pages/client/AboutUs";
import ContactUs from "./pages/client/ContactUs";
import Clases from "./pages/client/Clases"
import SysClient from "./pages/sys/SysClient";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Navigate to="/login" /> },
    {
      path: "/sysClient",
      element: <SysClient />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: (
        <Protected>
          <Home />
        </Protected>
      ),
    },
    {
      path: "/profile",
      element: (
        <Protected>
          <Profile />
        </Protected>
      ),
    },
    {
      path: "/about",
      element: (
        <Protected>
          <AboutUs />
        </Protected>
      ),
    },
    {
      path: "/contact",
      element: (
        <Protected>
          <ContactUs />
        </Protected>
      ),
    },
    {
      path: "/clases",
      element: (
        <Protected>
          <Clases />
        </Protected>
      ),
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);

  return (
    <div className=" h-100">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
