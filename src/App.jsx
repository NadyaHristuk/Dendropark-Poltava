import { Navigate, Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import HomePage from './pages/HomePage';
import NotificationsProvider from './context/NotificationsProvider';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <NotificationsProvider>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          {/* <Route path="about" element={<AboutPage />} /> {/* Додавання сторінки "Про нас" */}
          <Route path="contact" element={<ContactPage />} />

          <Route path="*" element={<Navigate to={'/'} />} />
        </Route>
      </Routes>
    </NotificationsProvider>
  );
}
export default App;