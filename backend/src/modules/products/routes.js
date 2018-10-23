import { Router } from 'express';

import {
  productsController,
  productDetailController,
} from './productController';

const router = Router();
router.get('/', productsController);
router.get('/:id', productDetailController);

export default router;
