import { Router } from 'express';

import productRoutes from './modules/products/routes';
import
  contactFormRoutes
from './modules/contact-form/routes';

const router = Router();

router.use('/api/products', productRoutes);
router.use(
  '/api/contactForm',
  contactFormRoutes
);

export default router;
