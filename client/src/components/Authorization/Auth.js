
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuthContext from "../../hooks/useAuth";

const RequireAuth = () => {
    const { user } = useAuthContext();
    const location = useLocation();

    return (
        user?.accessToken
            ? < Outlet />
            : <Navigate to="/login" state={{ from: location }} replace />
    );
};

export default RequireAuth;