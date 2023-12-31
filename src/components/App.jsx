import React from 'react';
import { nanoid } from 'nanoid';
import css from './App.module.css';
import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  // generateId = () => nanoid();

  formSubmitHandler = data => {
    const { name, number } = data;

    if (
      this.state.contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contactcs!`);
      return;
    } else {
      const newContact = {
        // id: this.generateId(),
        id: nanoid(),
        name: name,
        number: number,
      };

      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };
  onFilterValueChange = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getVisibleAllContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    return (
      <div>
        <h1 className={css.main_title}>Phonebook</h1>
        <Form onSubmitForm={this.formSubmitHandler} />

        <h2 className={css.second_title}>Contacts</h2>
        <Filter
          value={this.state.filter}
          onFilterValueChange={this.onFilterValueChange}
        />
        <ContactList
          contacts={this.getVisibleAllContacts()}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
