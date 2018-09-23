import React from 'react';

import { Layout } from '../atoms/Layout';
import { Link } from '../atoms/Link';
import { Nav } from '../atoms/Nav';
import { NavBar } from '../atoms/NavBar';
import { NavItem } from '../atoms/NavItem';
import { NavLink } from '../atoms/NavLink';

export const TopNavBar = () => (
  <NavBar>
    <Link className="navbar-brand text-muted" to="/">
      E-shop
    </Link>
    <Layout className="navbar-collapse  justify-content-end">
      <Nav className="nav-pills">
        <NavItem className="nav-item">
          <NavLink exact className="nav-link" to="/">
            Home
          </NavLink>
        </NavItem>
        <NavItem className="nav-item">
          <NavLink className="nav-link" to="/products">
            Products
          </NavLink>
        </NavItem>
        <NavItem className="nav-item">
          <NavLink className="nav-link" to="/contact">
            Contact
          </NavLink>
        </NavItem>
        <NavItem className="nav-item">
          <NavLink className="nav-link" to="/cart">
            Cart
          </NavLink>
        </NavItem>
      </Nav>
    </Layout>
  </NavBar>
);
