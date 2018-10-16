## Basic express server with few routes

Creates simple HTTP server that listens on port 3000 and serves data on `/`, `/prodct` and `/product/:id` enpoints. For the rest of URL's it displays 404 error.

```javascript
import express from 'express';
import bodyParser from 'body-parser';

// JSON data containing products
import { PRODUCTS } from './testData';

// express app inicialization + global middlewares
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

// Start of server
app.listen(3000, () => {
  console.log('E-shop backend listening on port 3000!');
});
```
