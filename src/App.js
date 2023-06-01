import "./App.css";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import profile from "./pages/profile/profile";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";

function App() {
  // const ProtectedRoute = ({ children }) => {
    //   if (!currentUser) {
    //     return <Navigate to="/login" />;
    //   }

    //   return children;
    // };

    const router = createBrowserRouter([
      {
        //   path: "/",
        //   element: (
        //     <ProtectedRoute>
        //       <Layout />
        //     </ProtectedRoute>
        //   ),
        //   children: [
        //     {
        //       path: "/",
        //       element: <Home />,
        //     },
        //     {
        //       path: "/profile/:id",
        //       element: <Profile />,
        //     },
        //   ],
        // },
        // {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ]);

    return (
      <div>
        <RouterProvider router={router} />
      </div>
    );
  };


export default App;
