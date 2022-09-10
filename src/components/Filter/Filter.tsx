import React from 'react';
import { Form } from 'react-bootstrap';

interface IProps {
  filterChange: (e: string) => void;
}

export const Filter: React.FC<IProps> = ({ filterChange }) => {
  const hanldeChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
    filterChange(e.target.value);
  return (
    <Form>
      <Form.Label>Find contacts by name</Form.Label>
      <Form.Control
        type="text"
        name="filter"
        placeholder="Filter"
        onChange={hanldeChange}
      />
    </Form>
  );
};
