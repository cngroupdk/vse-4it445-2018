import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { PageWrapper } from './components/organisms/PageWrapper';

import { HomePage } from './components/pages/HomePage';
import { ProductListPageRaw } from './components/pages/ProductListPage';
// import { ProductDetailPage } from './components/pages/ProductDetailPage'; TODO: Create page
import { ContactPageRaw } from './components/pages/ContactPage';
import { ContactDetail } from './components/pages/ContactDetail';
import { ShoppingCartPageRaw } from './components/pages/ShoppingCartPage';
import { PageNotFound } from './components/pages/PageNotFound';

export const AppRoutes = () => (
  <PageWrapper>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/products" exact component={ProductListPageRaw} />
      <Route path="/products/:productId" exact component={PageNotFound} />
      <Route path="/contact" exact component={ContactPageRaw} />
      <Route path="/contact/:id" exact component={ContactDetail} />
      <Route path="/cart" exact component={ShoppingCartPageRaw} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  </PageWrapper>
);
