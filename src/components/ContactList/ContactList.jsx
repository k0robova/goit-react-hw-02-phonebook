import React from 'react';

export const ContactList = ({ contacts }) => (
  <ul>
    {contacts.map(contact => (
      <li key={contact.id}>
        <p>
          {contact.name}: {contact.number}
        </p>
        {/* <p>{contact.number}</p> */}
      </li>
    ))}
  </ul>
);
