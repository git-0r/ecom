import { useState, useContext, createContext } from "react";

const NotificationContext = createContext();

const NotificationProvider = ({ children }) => {
  const [timeoutId, setTimeoutId] = useState();
  const [notification, setNotification] = useState(null);

  const notificationHandler = (msg) => {
    clearTimeout(timeoutId);
    setNotification(msg);
    const id = setTimeout(() => setNotification(null), 4000);
    setTimeoutId(id);
  };

  return (
    <NotificationContext.Provider value={{ notification, notificationHandler }}>
      {children}
    </NotificationContext.Provider>
  );
};

const useNotification = () => useContext(NotificationContext);

export { NotificationProvider, useNotification };
