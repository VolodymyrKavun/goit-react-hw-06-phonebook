import { Item, List, Button } from './ContactList.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteItems } from '../../redux/contactSlice';

const ContactList = ({ propsContacts }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <List>
        {propsContacts.map(el => (
          <Item key={el.id}>
            {el.name}: {el.number}
            <Button onClick={() => dispatch(deleteItems(el.id))}>Delete</Button>
          </Item>
        ))}
      </List>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
};

export default ContactList;
