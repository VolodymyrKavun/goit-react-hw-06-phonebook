import useLocalStorage from 'hooks/useLocalStorage';
import { nanoid } from 'nanoid';
import { Form, Input, Button, Label } from './ContactForm.styled';
// import PropTypes from 'prop-types';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useLocalStorage('name', '');
  const [number, setNumder] = useLocalStorage('number', '');

  // зміна значення інпута
  const handleInputChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumder(value);
        break;
      default:
        return;
    }
  };

  // створення унікального "id"
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  // Сабмітить форму
  const handleSubmit = event => {
    event.preventDefault();
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    onSubmit(contact);
    reset();
  };

  // очищення інпута
  const reset = () => {
    setName('');
    setNumder('');
  };

  return (
    <>
      <div>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor={nameInputId}>Name</Label>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            onChange={handleInputChange}
            id={nameInputId}
            required
          />

          <Label htmlFor={numberInputId}>Number</Label>
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            onChange={handleInputChange}
            id={numberInputId}
            required
          />

          <Button>Add contact</Button>
        </Form>
      </div>
    </>
  );
};

export default ContactForm;

// todo Old Class

// const INITIAL_STATE = {
//   name: '',
//   number: '',
// };

// class ContactForm extends Component {
//   state = { ...INITIAL_STATE };

// створення унікального "id"
// nameInputId = nanoid();
// numberInputId = nanoid();

// // зміна значення інпута
// handleInputChange = event => {
//   const { name, value } = event.target;
//   this.setState({ [name]: value });
// };

// // Сабмітить форму
// handleSubmit = event => {
//   const { name, number } = this.state;

//   event.preventDefault();
//   const contact = {
//     id: nanoid(),
//     name: name,
//     number: number,
//   };

//   const { onSubmit } = this.props;
//   onSubmit && onSubmit(contact);

//   this.reset();
// };

// // очищення інпута
// reset = () => {
//   this.setState({ ...INITIAL_STATE });
// };

// render() {
//   const { name, number } = this.state;

//     return (
//       <>
//         <div>
//           <Form onSubmit={this.handleSubmit}>
//             <Label htmlFor={this.nameInputId}>Name</Label>
//             <Input
//               type="text"
//               name="name"
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               value={name}
//               onChange={this.handleInputChange}
//               id={this.nameInputId}
//               required
//             />

//             <Label htmlFor={this.numberInputId}>Number</Label>
//             <Input
//               type="tel"
//               name="number"
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               value={number}
//               onChange={this.handleInputChange}
//               id={this.numberInputId}
//               required
//             />

//             <Button>Add contact</Button>
//           </Form>
//         </div>
//       </>
//     );
//   }
// }

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

// export default ContactForm;
