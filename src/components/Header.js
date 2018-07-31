import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title, subtitle }) => (
  <div>
    <h1>{title}</h1>
    {subtitle && <h2>{subtitle}</h2>}
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
