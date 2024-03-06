import { createContext, useCallback, useContext, useState } from 'react';

const DataContext = createContext();
const ActionContext = createContext();

export const useNotifications = () => {
  const notifications = useContext(DataContext);
  return notifications;
};

export const useSetNotifications = () => {
  const setNotifications = useContext(ActionContext);
  return setNotifications;
};

export const useCloseNotification = () => {
  const setNotification = useSetNotifications();
  const deleteNotification = useCallback((notificationId) => {
    setNotification((n) => {
      return n.filter((el) => el.id !== notificationId);
    });
  }, []);
  return deleteNotification;
};

export const useAddNotification = () => {
  const setNotification = useSetNotifications();
  const closeNotification = useCloseNotification();
  const addNotification = useCallback((notification) => {
    const id = Date.now();
    setNotification((n) => [{ ...notification, id }, ...n]);
    setTimeout(() => {
      closeNotification(id);
    }, 1500);
  }, []);
  return addNotification;
};

const NotificationsProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  return (
    <ActionContext.Provider value={setNotifications}>
      <DataContext.Provider value={notifications}>
        {children}
      </DataContext.Provider>
    </ActionContext.Provider>
  );
};

export default NotificationsProvider;
