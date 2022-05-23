import { useContext, useReducer, createContext } from "react";

import { userReducer, useLocalStorage } from "../exports";

const userContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useReducer(userReducer, useLocalStorage("user"));

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

const useUser = () => useContext(userContext);

export { UserProvider, useUser };
