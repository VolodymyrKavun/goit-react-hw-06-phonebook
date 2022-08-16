import React from 'react';
import PropTypes from 'prop-types';
import { Label, Input, Container } from './Filter.styled';
import { filterItems } from '../../redux/contactSlice';
import { useDispatch } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();

  const filterValue = e => {
    dispatch(filterItems(e.target.value));
  };

  return (
    <Container>
      <Label>
        Find contact by name
        <Input type="text" onChange={filterValue} />
      </Label>
    </Container>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
