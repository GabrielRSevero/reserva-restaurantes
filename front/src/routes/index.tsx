import { createBrowserRouter } from "react-router-dom";
import Login from "~/pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>Home</div>
    )
  },
  {
    path: "/entrar",
    element: <Login />
  }
])

export default router;