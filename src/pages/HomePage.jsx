import { AttentionVisitors } from '../components/AttentionVisitors/AttentionVisitors';
import Calendar from '../components/Calendar/Calendar';
import ChroniclesList from '../components/Chronicles/ChroniclesList/ChroniclesList';
import Container from '../components/Container/Container';
import { HelpPark } from '../components/HelpPark/HelpPark/HelpPark';
import Hero from '../components/Hero/Hero';
import { Visual } from '../components/HelpPark/Visual/Visual';
import { ScrollToTop } from '../components/ScrollToTop/ScrollToTop';

const HomePage = () => {
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
				<ChroniclesList />
			</Container>

			<ScrollToTop />
		</>
	);
};

export default HomePage;
