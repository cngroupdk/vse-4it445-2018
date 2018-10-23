import db from '../../models/';

export const createContactForm =
  async (req, res) => {
  // const products = await db.Product.findAll({});
  res.json({
    ok: true,
    body: req.body,
  });
};
