import storeData from "./servicesStore.js";
import { ServicesInfo } from "./ServicesInfo/ServicesInfo";
import { ServicesStore } from "./ServicesStore/ServicesStore";
import css from "./ServicesInfo/ServicesInfo.module.scss";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { fetchOurServices } from "../../adminPanel/serviceApiOurServices.js";

export const Services = () => {
    const { t } = useTranslation();

    const [service, setService] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchAllServices() {
            try {
                setLoading(true);
                const response = await fetchOurServices();
                setService(response);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchAllServices();
    }, []);

    useEffect(() => {
        if (service && location.hash) {
            const id = location.hash.replace("#", "");
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    }, [service, location.hash]);

    return (
        <>
            <section id="services-section" className={css.services_wrapper}>
                <h2 className={css.title}>{t("footer.sections.services.ourServicesText")}</h2>
                <ServicesInfo service={service} loading={loading} error={error} />
                <h2 className={css.title_store} id="seedlings-section">
                    {t("footer.sections.services.canBuy")}:
                </h2>
                <ServicesStore />
            </section>
        </>
    );
};
