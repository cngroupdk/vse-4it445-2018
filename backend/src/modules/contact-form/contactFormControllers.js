import db from '../../models/';

export const createContactFormController =
  async (req, res) => {

  const form = await db.ContactForm.create(req.body);

  res.json({
    ok: true,
    form,
  });
};
