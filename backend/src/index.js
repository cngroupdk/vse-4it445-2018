import express from 'express';
import bodyParser from 'body-parser';

import { PRODUCTS } from './testData';

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

const findProductById = productId => {
  return PRODUCTS.find(item => {
    return item.id === productId;
  });
};

// ROUTES DEFINITION
app.get('/', function(req, res) {
  res.send('Welcome to E-shop API!');
});

app.get('/product', async (req, res) => {
  console.log('Product simple');
  return res.json(PRODUCTS);
});

app.get('/product/:id', async (req, res, next) => {
  const productId = Number(req.params.id);
  const product = findProductById(productId);
  if (!product) {
    next();
  }
  return res.json(product);
});

// 404 fallback
app.use((req, res, next) => {
  res.status(404);
  res.send('404: File Not Found');
});

app.listen(3000, () => {
  console.log('E-shop backend listening on port 3000!');
});
