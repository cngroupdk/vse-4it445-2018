import db from '../../models/';

export const createContactFormController =
  async (req, res) => {
  res.json({
    ok: true,
    body: req.body,
  });
};
