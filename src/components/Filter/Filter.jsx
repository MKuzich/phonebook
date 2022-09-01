import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

export const Filter = ({ filterChange }) => {
  const hanldeChange = e => filterChange(e.target.value);
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

Filter.propTypes = {
  filterChange: PropTypes.func.isRequired,
};
