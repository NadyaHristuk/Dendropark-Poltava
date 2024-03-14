import DocumentsList from '../components/Documents/DocumentsList/DocumentsList';
import ChroniclesList from '../components/Chronicles/ChroniclesList/ChroniclesList';
import Container from '../components/Container/Container';

const ChroniclesPage = () => {
	return (
		<Container>
			<ChroniclesList paddingTop={"160"}/>
			<DocumentsList />
		</Container>
	);
};

export default ChroniclesPage;
