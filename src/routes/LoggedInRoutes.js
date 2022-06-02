import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useUser } from "../exports";

export const LoggedInRoutes = () => {
  const { user } = useUser();
  const location = useLocation();
  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};
