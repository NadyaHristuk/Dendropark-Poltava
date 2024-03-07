import Administration from '../components/Administration/Administration';
import Contacts from '../components/Contacts/Contacts';
import Container from '../components/Container/Container';

const ContactPage = () => {
  return (
    <Container>
      <Contacts />
      <Administration />
    </Container>
  );
};

export default ContactPage;
