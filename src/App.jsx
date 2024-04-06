import { Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import { lazy } from "react";
import NotificationsProvider from "./context/NotificationsProvider";
import PrivateRoute from "./adminPanel/Routes/PrivateRoute";
import PublicRoute from "./adminPanel/Routes/PublicRoute";

const HomePage = lazy(() => import("./pages/HomePage"));
const ChroniclesPage = lazy(() => import("./pages/ChroniclesPage"));
const VzaemodiaPage = lazy(() => import("./components/Vzaemodia/VzaemodiaPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const CommonLayout = lazy(() => import("./adminPanel/CommonLayout/CommonLayout"));
const Products = lazy(() => import("./adminPanel/pages/Products/Products"));
const Trials = lazy(() => import("./adminPanel/pages/Trials/Trials"));
const Locations = lazy(() => import("./adminPanel/pages/Locations/Locations"));
const Documents = lazy(() => import("./adminPanel/pages/Documents/Documents"));
const HelpPark = lazy(() => import("./adminPanel/pages/HelpPark/HelpPark"));
const Services = lazy(() => import("./adminPanel/pages/Services/Services"));
const Events = lazy(() => import("./adminPanel/pages/Events/Events"));
const Welcome = lazy(() => import("./adminPanel/pages/Welcome/Welcome"));
const Login = lazy(() => import("./adminPanel/pages/login/Login"));

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
          <Route path="admin" element={<CommonLayout />}>
            <Route index element={<Welcome />} />
            <Route path="product" element={<PrivateRoute element={<Products />} />} />
            <Route path="trials" element={<PrivateRoute element={<Trials />} />} />
            <Route path="locations" element={<PrivateRoute element={<Locations />} />} />
            <Route path="documents" element={<PrivateRoute element={<Documents />} />} />
            <Route path="donation" element={<PrivateRoute element={<HelpPark />} />} />
            <Route path="services" element={<PrivateRoute element={<Services />} />} />
            <Route path="events" element={<PrivateRoute element={<Events />} />} />
          </Route>
          <Route path="/login" element={<PublicRoute element={<Login />} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </NotificationsProvider>
  );
}
export default App;
