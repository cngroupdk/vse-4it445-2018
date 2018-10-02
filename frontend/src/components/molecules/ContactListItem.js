import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../atoms/Button';

export class ContactListItem extends React.Component {
  state = {
    isOpen: false,
    counter: 0,
  };

  render() {
    const { counter } = this.state;
    const { isOpen, onOpen } = this.props;

    const { name, email, phone, id } = this.props.person;
    return (
      <div className="py-2 border-bottom">
        <Link to={`/contact/${id}`}>{name}</Link>
        <p>{email}</p>
        <Button
          title={`${isOpen ? 'Close' : 'Open'} ${counter}`}
          variant={isOpen ? 'warning' : 'secondary'}
          size="sm"
          onClick={
            () => onOpen(id)
            // () => this.setState({ isOpen: !isOpen })
            // () => this.setState((prevState) => {
            //     return {
            //       isOpen: !isOpen,
            //       counter: 1 + prevState.counter,
            //     };
            // })
          }
        />
        {isOpen && (
          <p>
            <div>Phone: {phone}</div>
            <div>More info here...</div>
          </p>
        )}
      </div>
    );
  }
}
