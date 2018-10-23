import React, { Component } from 'react';

import { Button } from '../atoms/Button';
import { Layout } from '../atoms/Layout';
import { Row } from '../atoms/Row';
import { InputWithLabel } from '../molecules/InputWithLabel';
import { TextareaWithLabel } from '../molecules/TextareaWithLabel';

export class ContactForm extends Component {
  render() {
    const initialValues = { name: '', email: '', message: '' };

    const handleChange = () => {};
    const handleBlur = () => {};
    const handleSubmit = () => {};
    const isSubmitting = false;
    const values = initialValues;

    return (
      <form onSubmit={handleSubmit}>
        <Row>
          <Layout className="col-md-6">
            <InputWithLabel
              id="name"
              label="Name"
              placeholder="Your name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <InputWithLabel
              id="email"
              label="Email"
              placeholder="Your email"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Layout>
        </Row>
        <TextareaWithLabel
          id="message"
          label="Message"
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Button
          title="Send contact requrest"
          type="submit"
          disabled={isSubmitting}
        />
      </form>
    );
  }
}
