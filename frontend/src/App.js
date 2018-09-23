import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import { AppRoutes } from './AppRoutes';
import { configureStore } from './store/configureStore.js';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <ScrollToTop>
            <AppRoutes />
          </ScrollToTop>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
