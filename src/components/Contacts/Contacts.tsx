import React from 'react';
import { List } from './Contacts.styled';
import { Contact } from '../Contact/Contact';
import { useGetContactsQuery } from '../../redux/contactsApi';
import { Spinner } from 'react-bootstrap';

interface IProps {
  filter: string;
}

export const Contacts: React.FC<IProps> = ({ filter }) => {
  const { data, isFetching } = useGetContactsQuery();
  return (
    <>
      <List>
        {data &&
          data.map(contact => {
            return (
              contact.name.toLowerCase().includes(filter.toLowerCase()) && (
                <Contact
                  name={contact.name}
                  number={contact.number}
                  id={contact.id}
                  key={contact.id}
                />
              )
            );
          })}
      </List>
      {isFetching && (
        <Spinner animation="border" role="status" size="sm">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </>
  );
};
