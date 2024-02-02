import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../lib/appRoutes";

export const UserContext = createContext(null);
const[userData, setUserData] = useState(null);

export const UserProvider = ({ children }) => {
    let navigate = useNavigate();
    const loginUser = (user) => {
        setUserData(user);
        navigate(AppRoutes.MAIN)
    }

    const logoutUser = () => {
        setUserData(null);
        navigate(AppRoutes.LOGIN)
    }

    return(
        <UserContext.Provider value={{userData, loginUser, logoutUser}}>{children}</UserContext.Provider>
    )
}