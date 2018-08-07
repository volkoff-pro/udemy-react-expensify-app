import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title, subtitle }) => (
  <div className="header">
    <div className="container">
      <h1 className="header__title">{title}</h1>
      {subtitle && <h2 className="header__subtitle">{subtitle}</h2>}
    </div>
  </div>
);

Header.defaultProps = {
  title: 'Indecision',
  subtitle: 'some default'
};

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

export default Header;
