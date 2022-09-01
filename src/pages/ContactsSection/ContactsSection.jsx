import { Contacts } from 'components/Contacts/Contacts';
import { ContactAddForm } from 'components/ContactAddForm/ContactAddForm';
import { Filter } from 'components/Filter/Filter';
import { Header, Section } from './ContactsSection.styled';
import { useState } from 'react';
import { Box } from 'components/Box';
import { Container } from 'react-bootstrap';

const ContactsSection = () => {
  const [filter, setFilter] = useState('');
  const filterChange = value => {
    setFilter(value);
  };
  return (
    <Container>
      <Section>
        <Box
          border="normal"
          borderRadius="large"
          borderColor="borders"
          py={6}
          px={5}
          width={0.42}
        >
          <Header>Add contacts to your phonebook</Header>
          <ContactAddForm />
        </Box>
        <Box
          border="normal"
          borderRadius="large"
          borderColor="borders"
          py={6}
          px={5}
          width={0.54}
        >
          <Header>Contacts</Header>
          <Filter filterChange={filterChange} />
          <Contacts filter={filter} />
        </Box>
      </Section>
    </Container>
  );
};

export default ContactsSection;
