import React, { Component } from 'react';
import { Formik } from 'formik';

import { Button } from '../atoms/Button';
import { Layout } from '../atoms/Layout';
import { Row } from '../atoms/Row';
import { InputWithLabel } from '../molecules/InputWithLabel';
import { TextareaWithLabel } from '../molecules/TextareaWithLabel';

import api from '../../api';

export class ContactForm extends Component {
  render() {
    const initialValues = { name: '', email: '', message: '' };
    console.log('hello')
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          api.put('contactForm', values)
            .then(({ data }) => {
              actions.setSubmitting(false);
            })
        }}
        render={({
          values,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
        }) => (
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
        )}
      />
    );
  }
}





//
