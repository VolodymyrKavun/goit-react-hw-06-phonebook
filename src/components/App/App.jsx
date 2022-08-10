import { useState } from 'react';
import useLocalStorage from 'hooks/useLocalStorage';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { ContainerBody, Title, TitleSecond } from './App.styled';

const App = () => {
  // Масив стандартних контактів)))
  const [contacts, setContacts] = useLocalStorage('contacts', [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filterEl, setFilter] = useState('');

  // Добавляє новий об'єкт та оновлює попередній масив об'єктів
  const formSubmitHandler = newContact => {
    const contactsName = contacts.some(el => newContact.name === el.name);

    // Перевірка на однакові імена
    contactsName
      ? alert(`${newContact.name} is already in contacts.`)
      : setContacts([...contacts, newContact]);
  };

  // Інпут фільтра значення, те, що вводимо
  const changeFilter = e => {
    setFilter(e.target.value);
  };

  // Логіка фільтру
  const getVisibleContacts = () => {
    const normalizedFilter = filterEl.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filterContacts = getVisibleContacts();

  // Логіка кнопки видалення
  const handleDeleteItem = contactId => {
    setContacts(state => state.filter(el => el.id !== contactId));
  };

  return (
    <ContainerBody>
      <Title>Phonebook</Title>

      <ContactForm onSubmit={formSubmitHandler} />

      <TitleSecond>Contacts</TitleSecond>

      <Filter value={filterEl} onChange={changeFilter} />
      <ContactList
        propsContacts={filterContacts}
        deleteBtn={handleDeleteItem}
      />
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
