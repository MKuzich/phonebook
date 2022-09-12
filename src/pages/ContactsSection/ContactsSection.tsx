import { Contacts } from '../../components/Contacts/Contacts';
import { ContactAddForm } from '../../components/ContactAddForm/ContactAddForm';
import { Filter } from '../../components/Filter/Filter';
import { Header, Section } from './ContactsSection.styled';
import { useState } from 'react';
import { Box } from '../../components/Box';
import { Container } from 'react-bootstrap';
import React from 'react';

const ContactsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('');
  const filterChange = (value: string): void => {
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
