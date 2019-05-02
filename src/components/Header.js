import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';

import './Header.css';

const routes = [{
  to: 'home',
  name: 'Home'
}, {
  to: 'rsvp',
  name: 'RSVP'
}, {
  to: 'info',
  name: 'Information'
}];

const NavLinkTab = ({ link }) => <div className="link"><NavLink className="link nav-link" to={link.to}>{link.name}</NavLink></div>;

NavLinkTab.propTypes = {
  link: PropTypes.shape({
    to: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired
};

const Header = () => (
  <header>
    <div className="container wrapper">
      <div className="logo">
        <Link className="link" to="/home">
          <h2 className="tangerine">Siiak - Petrov Wedding</h2>
        </Link>
      </div>
      <nav>
        {routes.map(el => <NavLinkTab key={el.to} link={el} />)}
      </nav>
    </div>
  </header>
);

export default Header;
