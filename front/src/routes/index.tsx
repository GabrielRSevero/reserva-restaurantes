import { createBrowserRouter } from "react-router-dom";
import Home from "~/pages/Home";
import Login from "~/pages/Login";
import Reservation from "~/pages/Reservation";
import ProtectedRoute from "./ProtectedRoute";
import { Reservations } from "~/pages/Reservations";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    )
  },
  {
    path: "/entrar",
    element: <Login />
  },
  {
    path: "/reservar",
    element: (
      <ProtectedRoute>
        <Reservation />
      </ProtectedRoute>
    )
  },
  {
    path: "/reservas",
    element: (
      <ProtectedRoute>
        <Reservations />
      </ProtectedRoute>
    )
  },
])

export default router;