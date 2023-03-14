import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { AddForm } from './Phonebook/AddForm';
import { ContactList } from './Contacts/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  addContact = (newContact, resetForm) => {
    if (
      this.state.contacts.filter(contact => contact.name === newContact.name)
        .length
    ) {
      alert(`${newContact.name}:is already in contacts`);
      return;
    }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
    resetForm();
  };
  deleteContact = delContact => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== delContact),
    }));
  };
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }

    console.log(prevState);
    console.log(this.state);
  }
  render() {
    const { filter, contacts } = this.state;
    const searchContacts = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });

    return (
      <>
        <h1>Phonebook</h1>
        <AddForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList contacts={searchContacts} onDelete={this.deleteContact} />
        <GlobalStyle />
      </>
    );
  }
}
