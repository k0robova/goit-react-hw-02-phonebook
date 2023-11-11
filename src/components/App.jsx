import React from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';

export class App extends React.Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  generateId = () => nanoid();

  formSubmitHandler = data => {
    const newContact = {
      id: this.generateId(),
      name: data.name,
      number: data.number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  render() {
    return (
      <>
        <Form onSubmitForm={this.formSubmitHandler} />
        <ContactList contacts={this.state.contacts} />
      </>
    );
  }
}
