import db from '../../models/';

export const productsController = async (req, res) => {
  const products = await db.Product.findAll({});
  res.json({ products });
};

export const productDetailController = async (req, res, next) => {
  const { params } = req;
  const product = await db.Product.findById(Number(params.id), {});

  if (!product) {
    return next();
  }

  return res.json({ product });
};
