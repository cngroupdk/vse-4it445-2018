import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import { AppRoutes } from './AppRoutes';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <AppRoutes />
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
