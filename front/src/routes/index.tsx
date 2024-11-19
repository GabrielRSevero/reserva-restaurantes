import { createBrowserRouter } from "react-router-dom";
import ValidatePhoneNumber from "../pages/ValidatePhoneNumber";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>Home</div>
    )
  },
  {
    path: "/entrar",
    element: <ValidatePhoneNumber />
  }
])

export default router;