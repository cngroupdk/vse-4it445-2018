import React, { Component } from 'react';
import { ContactListItem } from '../molecules/ContactListItem';
import axios from 'axios';



export class ContactPageRaw extends Component {
  constructor(props) {
    super(props);

    this.state = {
      salesContacts: [],
      marketingContacts: [],
    };
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users/').then(res => {
      console.log(res)
      this.setState({
        salesContacts: res.data.filter(user => user.id < 6),
        marketingContacts: res.data.filter(user => user.id > 5),
      })
    })
  }

  render() {
    const { salesContacts, marketingContacts } = this.state;

    return (
      <div>
        <div className="jumbotron">
          <h1>Contact</h1>
        </div>
        <div>
          <h2>Contacts</h2>
          <h3>Sales</h3>
          {salesContacts.map(person => (
            <ContactListItem person={person} key={person.id} />
          ))}
        </div>
        <div>
          <h3>Marketing</h3>
          {marketingContacts.map(person => (
            <ContactListItem person={person} key={person.id} />
          ))}
        </div>
        <div>
          <h3>Claims</h3>
        </div>
      </div>
    );
  }
}
