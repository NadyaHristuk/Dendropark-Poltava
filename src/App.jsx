import { Navigate, Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import HomePage from './pages/HomePage';
import ChroniclesPage from './pages/ChroniclesPage';
import NotificationsProvider from './context/NotificationsProvider';
import VzaemodiaPage from './components/Vzaemodia/VzaemodiaPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <NotificationsProvider>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/vzaemodia" element={<VzaemodiaPage />} />
          <Route path="chronicles" element={<ChroniclesPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to={'/'} />} />
        </Route>
      </Routes>
    </NotificationsProvider>
  );
}
export default App;
