import React from 'react';
import PropTypes from 'prop-types';
import Option from './Option';

const Options = ({ handleDeleteOptions, handleDeleteOption, options }) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      <button
        className="button button--link"
        type="button"
        onClick={handleDeleteOptions}
      >
        Remove All
      </button>
    </div>

    {options.length === 0 && (
      <p className="widget__message">Please add an option to get started!</p>
    )}
    {options.map(option => (
      <Option
        handleDeleteOption={handleDeleteOption}
        key={option}
        option={option}
      />
    ))}
  </div>
);

Options.propTypes = {
  handleDeleteOption: PropTypes.func.isRequired,
  handleDeleteOptions: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Options;
