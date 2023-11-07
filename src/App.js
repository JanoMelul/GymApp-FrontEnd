import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import "./App.css";

import Login from "./pages/Login";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Protected from "./security/Protected/Protected";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Navigate to="/login" /> },
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
      path: "*",
      element: <PageNotFound />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
