import { useOutlet } from 'react-router-dom';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Notification } from '../Notification/Notification';

export const SharedLayout = () => {
  const outlet = useOutlet(); 
  const notifications = [
    { id: 1, type: 'success', message: 'Successfully completed!' },
   
  ];

  return (
    <>
      <Header />
      <main>
        {outlet} {/* Тут рендериться компонент для активного маршруту */}
      </main>
      {notifications.map((notif) => (
        <Notification key={notif.id} type={notif.type} message={notif.message} />
      ))}
      <Footer />
    </>
  );
};

export default SharedLayout;
