import DocumentsList from '../components/Documents/DocumentsList/DocumentsList';
import ChroniclesList from '../components/Chronicles/ChroniclesList/ChroniclesList';
import Container from '../components/Container/Container';
import { ScrollToTop } from '../components/ScrollToTop/ScrollToTop';

const ChroniclesPage = () => {
	return (
		<Container>
			<ChroniclesList />
			<DocumentsList />
			<ScrollToTop />
		</Container>
	);
};

export default ChroniclesPage;
