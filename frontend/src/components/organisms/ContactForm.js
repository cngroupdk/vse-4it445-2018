import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Button } from '../atoms/Button';
import { Row } from '../atoms/Row';
import { InputWithLabel } from '../molecules/InputWithLabel';
import { TextareaWithLabel } from '../molecules/TextareaWithLabel';

export class ContactForm extends Component {
  static propTypes = {
    values: PropTypes.object.isRequired,
  };

  render() {
    const { values, onChange, onSubmit } = this.props;

    const { name, email, message } = values;

    return (
      <form onSubmit={onSubmit}>
        <Row>
          <div className="col-md-6">
            <InputWithLabel
              id="name"
              label="Name"
              placeholder="Your name"
              value={name}
              onChange={onChange}
            />
            <InputWithLabel
              id="email"
              label="Email"
              placeholder="Your email"
              type="email"
              value={email}
              onChange={onChange}
            />
          </div>
        </Row>
        <TextareaWithLabel
          id="message"
          label="Message"
          value={message}
          onChange={onChange}
        />
        <Button text="Send contact requrest" />
      </form>
    );
  }
}
