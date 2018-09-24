import React from 'react';

export const Button = ({ text, type = 'submit' }) => (
  <button className="btn btn-default" type={type}>
    {text}
  </button>
);
