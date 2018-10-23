import { Router } from 'express';

import {
  createContactForm,
} from './contactFormControllers';

const router = Router();
router.put('/', createContactForm);

export default router;
