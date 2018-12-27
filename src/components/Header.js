import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => (
  <header className="headerContainer">
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact>
      Home
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      Create Expense
    </NavLink>
    <NavLink to="/help" activeClassName="is-active">
      Help
    </NavLink>
    <Link to="/">Test</Link>
  </header>
);

export default Header;
