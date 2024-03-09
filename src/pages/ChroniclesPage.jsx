import DocumentsList from '../components/Documents/DocumentsList/DocumentsList';
import ChroniclesList from '../components/Chronicles/ChroniclesList/ChroniclesList';
import Container from '../components/Container/Container';
import documents from '../components/Documents/documents';



const ChroniclesPage = () => {
  return (
    <Container>
      <ChroniclesList />
      <DocumentsList items={documents} />
    </Container>
  );
};

export default ChroniclesPage;
