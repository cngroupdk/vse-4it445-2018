import { Router } from 'express';

import {
  createContactFormController,
} from './contactFormControllers';

const router = Router();
router.post('/', createContactFormController);

export default router;
