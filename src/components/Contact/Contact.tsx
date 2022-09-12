import React from 'react';
import { Item, Text } from './Contact.styled';
import { useRemoveContactMutation } from '../../redux/contactsApi';
import { Button } from 'react-bootstrap';
import { Spin } from './Contact.styled';
import { IContact } from '../../types/contact';
import { toast } from 'react-toastify';

export const Contact: React.FC<IContact> = ({ name, number, id }) => {
  const [removeContact, { isLoading }] = useRemoveContactMutation();

  const handleRemoveContact = (
    e: React.MouseEvent<HTMLButtonElement>
  ): void => {
    removeContact((e.target as HTMLButtonElement).id);
    toast.info(`${(e.target as HTMLButtonElement).name} is deleted!`);
  };
  return (
    <Item>
      <Text>
        {name}: {number}
      </Text>
      <Button
        variant="outline-primary"
        type="button"
        onClick={handleRemoveContact}
        id={id}
        name={name}
      >
        Delete
        {isLoading && (
          <Spin animation="border" role="status" size="sm">
            <span className="visually-hidden">Loading...</span>
          </Spin>
        )}
      </Button>
    </Item>
  );
};
