import { Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import { lazy } from "react";
import NotificationsProvider from "./context/NotificationsProvider";

const HomePage = lazy(() => import("./pages/HomePage"));
const ChroniclesPage = lazy(() => import("./pages/ChroniclesPage"));
const VzaemodiaPage = lazy(() => import("./components/Vzaemodia/VzaemodiaPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const AdminPanel = lazy(() => import("./adminPanel/AdminPanel"));

function App() {
    return (
        <NotificationsProvider>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="vzaemodia" element={<VzaemodiaPage />} />
                    <Route path="chronicles" element={<ChroniclesPage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="contact" element={<ContactPage />} />
                    <Route path="services" element={<ServicesPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                   
                </Route>
                <Route path="/admin/*" element={<AdminPanel />} />
            </Routes>
        </NotificationsProvider>
    );
}
export default App;
