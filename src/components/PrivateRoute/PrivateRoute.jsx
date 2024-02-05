import { Navigate, Outlet } from "react-router-dom";
import { AppRoutes } from "../../lib/appRoutes";
import { useUser } from "../../hooks/useUser";

export default function PrivateRoute() {
    const { userData } = useUser();
    return userData ? <Outlet /> : <Navigate to={AppRoutes.LOGIN} />
}