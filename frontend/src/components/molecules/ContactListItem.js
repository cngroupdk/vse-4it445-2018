import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../atoms/Button';

export class ContactListItem extends React.Component {
  state = {
    isOpen: false,
    count: 0,
  };

  render() {
    const { count } = this.state;
    const { isOpen, onOpen } = this.props;
    const { name, email, phone, id } = this.props.person;
    
    return (
      <div className="py-2 border-bottom">
        <Link to={`/contact/${id}`}>{name}</Link>
        <p>{email}</p>
        <p>
          <Button
            title={`${isOpen ? 'Close' : 'Open'} counter: ${count}`}
            size="sm"
            variant={isOpen ? 'warning' : 'secondary'}
            onClick={
              () => onOpen(id)
            }
            // onClick={
            //   () => this.setState((prevState) => {
            //     return {
            //       isOpen: !isOpen,
            //       count: 1 + prevState.count,
            //     };
            //   })
            // }
          />
        </p>
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
