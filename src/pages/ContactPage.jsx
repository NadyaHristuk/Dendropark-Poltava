import Administration from '../components/Administration/Administration';
import Contacts from '../components/Contacts/Contacts';
import Container from '../components/Container/Container';
import { ScrollToTop } from '../components/ScrollToTop/ScrollToTop';

const ContactPage = () => {
	return (
		<Container>
			<Contacts />
			<Administration />
			<ScrollToTop />
		</Container>
	);
};

export default ContactPage;
