import { createContext, useContext, useReducer } from "react";
import userReducer from "../reducers/userReducer";
import { useLocalStorage } from "../utils/localStorage";

const userContext = createContext();

const UserProvider = ({ children }) => {

    const [user, setuser] = useReducer(userReducer, useLocalStorage("user"));

    return (
        <userContext.Provider value={[user, setuser]}>
            {children}
        </userContext.Provider>
    )
}

const useUser = () => useContext(userContext);

export { UserProvider, useUser }