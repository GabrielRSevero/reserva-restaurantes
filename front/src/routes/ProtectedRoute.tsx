import { Navigate } from "react-router-dom";

const isAuthenticated = () => {
  const token = localStorage.getItem("authToken");
  return !!token;
};

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/entrar" replace />;
  }
  return children;
};

export default ProtectedRoute;
