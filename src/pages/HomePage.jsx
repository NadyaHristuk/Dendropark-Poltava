import { AttentionVisitors } from "../components/AttentionVisitors/AttentionVisitors";
import Calendar from "../components/Calendar/Calendar";
import ChroniclesList from "../components/Chronicles/ChroniclesList/ChroniclesList";
import Container from "../components/Container/Container";
import { HelpPark } from "../components/HelpPark/HelpPark/HelpPark";
import Hero from "../components/Hero/Hero";
import { Visual } from "../components/HelpPark/Visual/Visual";
import { ScrollToTop } from "../components/ScrollToTop/ScrollToTop";
import { useEffect, useState } from "react";
import { fetchEvents } from "../adminPanel/serviceApiEvents";

const HomePage = () => {
    const [chronicles, setChronicles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchChroniclesList = async () => {
            try {
                setLoading(true);
                const response = await fetchEvents();
                if (response) {
                    setChronicles(response.sort((a, b) => {
                        const dateA = new Date(a.createdAt);
                        const dateB = new Date(b.createdAt);
                        return dateB - dateA;
                    }));
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchChroniclesList();
    }, []);

    return (
        <>
            <Container>
                <Hero />
            </Container>

            <Container>
                <AttentionVisitors />
            </Container>

            <Container>
                <HelpPark />
            </Container>

            <Visual />

            <Container>
                <Calendar />
            </Container>

            <Container>
                <ChroniclesList chronicles={chronicles} loading={loading} error={error} />
            </Container>

            <ScrollToTop />
        </>
    );
};

export default HomePage;
