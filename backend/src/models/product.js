module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    'Product',
    {
      title: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      shortInfo: DataTypes.STRING,
    },
    {}
  );
  return Product;
};
