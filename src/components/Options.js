import React from 'react';
import PropTypes from 'prop-types';
import Option from './Option';

const Options = ({ handleDeleteOptions, handleDeleteOption, options }) => (
  <div>
    <button type="button" onClick={handleDeleteOptions}>
      Remove All
    </button>
    {options.length === 0 && <p>Please add an option to get started!</p>}
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
