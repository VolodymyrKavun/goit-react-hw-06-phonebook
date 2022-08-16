import { useSelector, useDispatch } from 'react-redux/es/exports';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { ContainerBody, Title, TitleSecond } from './App.styled';
import { getFilter, getContacts } from '../../redux/contactSelectors';
import { createItem } from '../../redux/contactSlice';
import { showWarning } from 'utils/toastMessage';

const App = () => {
  const contacts = useSelector(getContacts);
  const filterInput = useSelector(getFilter);

  const dispatch = useDispatch();

  // Добавляє новий об'єкт та оновлює попередній масив об'єктів
  const addContact = newContact => {
    const contactsName = contacts.some(el => newContact.name === el.name);

    // Перевірка на однакові імена
    contactsName
      ? showWarning(`${newContact.name} is already in contacts.`)
      : dispatch(createItem(newContact));
  };

  // Логіка фільтру
  const getVisibleContacts = () => {
    const normalizedFilter = filterInput.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filterContacts = getVisibleContacts();

  return (
    <ContainerBody>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={addContact} />
      <TitleSecond>Contacts</TitleSecond>
      <Filter />
      <ContactList propsContacts={filterContacts} />
      <ToastContainer />
    </ContainerBody>
  );
};

export default App;

// const INITIAL_STATE = {
//   contacts: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   filter: '',
// };

// class App extends Component {
//   state = { ...INITIAL_STATE };

//   // Добавляє та оновлює масив об'єктів
//   formSubmitHandler = formData => {
//     const contactsName = this.state.contacts.map(el => el.name);

//     // Перевірка на однакові імена
//     contactsName.includes(formData.name)
//       ? alert(`${formData.name} is already in contacts.`)
//       : this.setState(prevState => ({
//           contacts: [...prevState.contacts, formData],
//         }));
//   };

//   // Логіка кнопки видалення
//   handleDeleteItem = id => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(item => item.id !== id),
//     }));
//   };

//   // Інпут фільтра значення, те, що вводимо
//   changeFilter = e => {
//     this.setState({ filter: e.target.value });
//   };

//   // Логіка фільтру
//   getVisibleContacts = () => {
//     const { contacts, filter } = this.state;

//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   // Життєвий цикл та рендер з "LocalStorage".
//   // Запускається один раз при звантаженні сторінки
//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);

//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   // Життєвий цикл на оновлення та отримання даних в "LocalStorage"
//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   render() {
//     const { filter } = this.state;

//     const visibleContacts = this.getVisibleContacts();

//     return (
//       <ContainerBody>
//         <Title>Phonebook</Title>

//         <ContactForm onSubmit={this.formSubmitHandler} />

//         <TitleSecond>Contacts</TitleSecond>

//         <Filter value={filter} onChange={this.changeFilter} />
//         <ContactList
//           contacts={visibleContacts}
//           deleteBtn={this.handleDeleteItem}
//         />
//       </ContainerBody>
//     );
//   }
// }

// export default App;
