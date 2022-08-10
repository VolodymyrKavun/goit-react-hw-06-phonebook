import React from 'react';
import PropTypes from 'prop-types';
import { Label, Input, Container } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <Container>
      <Label>
        Find contact by name
        <Input type="text" value={value} onChange={onChange} />
      </Label>
    </Container>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
