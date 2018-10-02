import React, { Component } from 'react';
import { ContactListItem } from '../molecules/ContactListItem';

import axios from 'axios';

export class ContactPageRaw extends Component {
  constructor(props) {
    super(props);

    this.state = {
      salesContacts: [],
      marketingContacts: [],
      openedContactId: null,
    };
  }

  componentDidMount() {
    this.fetchContats();
  }

  fetchContats() {
    axios.get('https://jsonplaceholder.typicode.com/users/').then(
      (response) => {
        const { data } = response;

        this.setState({
          salesContacts: data.filter(contact => contact.id <= 5),
          marketingContacts: data.filter(contact => contact.id > 5),
        });
      }
    );
  }

  render() {
    const {
      salesContacts,
      marketingContacts,
      openedContactId,
    } = this.state;

    return (
      <div>
        <div className="jumbotron">
          <h1>Contact</h1>
        </div>
        <div>
          <h2>Contacts</h2>
          <h3>Sales</h3>
          {salesContacts.map(person => (
            <ContactListItem
              isOpen={person.id === openedContactId}
              person={person}
              key={person.id}
              onOpen={
                (id) => {
                  this.setState({ openedContactId: id })
                }
              }
            />
          ))}
        </div>
        <div>
          <h3>Marketing</h3>
          {marketingContacts.map(person => (
            <ContactListItem
              person={person}
              key={person.id}
              isOpen={person.id === openedContactId}
              onOpen={
                (id) => {
                  this.setState({ openedContactId: id })
                }
              }
            />
          ))}
        </div>
        <div>
          <h3>Claims</h3>
        </div>
      </div>
    );
  }
}
