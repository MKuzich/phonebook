import React, { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from '../../redux/contactsApi';
import { Button, Form } from 'react-bootstrap';
import { Spin } from './ContactAddForm.styled';

export const ContactAddForm: React.FC = () => {
  const { data } = useGetContactsQuery();
  const [addContact, { isLoading }] = useAddContactMutation();
  const [name, setName] = useState<string>('');
  const [number, setNumber] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      data?.find(contact =>
        contact.name.toLowerCase().includes(name.toLowerCase())
      )
    ) {
      return Notify.warning(`${name} is already in contacts`);
    }
    addContact({ name, number });
    setName('');
    setNumber('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        console.log('Something went wrong!');
    }
  };

  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={name}
          placeholder="Name"
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Label>Number</Form.Label>
        <Form.Control
          type="tel"
          name="number"
          value={number}
          placeholder="Number"
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Form.Group>
      <Button type="submit">
        Add contact
        {isLoading && (
          <Spin animation="border" role="status" size="sm">
            <span className="visually-hidden">Loading...</span>
          </Spin>
        )}
      </Button>
    </Form>
  );
};
