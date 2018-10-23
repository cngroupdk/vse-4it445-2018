'use strict';
module.exports = (sequelize, DataTypes) => {
  const ContactForm = sequelize.define('ContactForm', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    message: DataTypes.TEXT
  }, {});
  ContactForm.associate = function(models) {
    // associations can be defined here
  };
  return ContactForm;
};