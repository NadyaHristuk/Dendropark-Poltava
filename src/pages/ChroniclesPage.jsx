import DocumentsList from "../components/Documents/DocumentsList/DocumentsList";
import ChroniclesList from "../components/Chronicles/ChroniclesList/ChroniclesList";
import Container from "../components/Container/Container";
import { ScrollToTop } from "../components/ScrollToTop/ScrollToTop";
import { useEffect, useState } from "react";
import { fetchEvents } from "../adminPanel/serviceApiEvents";

const ChroniclesPage = () => {
  const [chronicles, setChronicles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChroniclesList = async () => {
      try {
        setLoading(true);
        const response = await fetchEvents();
        if (response) {
          setChronicles(
            response.sort((a, b) => {
              const dateA = new Date(a.createdAt);
              const dateB = new Date(b.createdAt);
              return dateB - dateA;
            })
          );
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
    <div style={{ minHeight: "100dvh" }}>
      <Container>
        <div style={{ paddingTop: `80px` }}>
          <ChroniclesList chronicles={chronicles} loading={loading} error={error} />
        </div>
        <DocumentsList chronicles={chronicles} />
        <ScrollToTop />
      </Container>
    </div>
  );
};

export default ChroniclesPage;
