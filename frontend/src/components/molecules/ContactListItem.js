import React from 'react';
import { Link } from 'react-router-dom';

export class ContactListItem extends React.Component {
  render() {
    const { name, email, id } = this.props.person;
    return (
      <div>
        <Link to={`/contact/${id}`}>{name}</Link>
        <p>{email}</p>
      </div>
    );
  }
}
