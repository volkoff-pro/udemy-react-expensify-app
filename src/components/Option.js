import React from 'react';
import PropTypes from 'prop-types';

const Option = ({ option, handleDeleteOption }) => (
  <div>
    {option}
    <button
      className="button button--link"
      type="button"
      onClick={() => {
        handleDeleteOption(option);
      }}
    >
      Remove
    </button>
  </div>
);

Option.propTypes = {
  option: PropTypes.string.isRequired,
  handleDeleteOption: PropTypes.func.isRequired
};

export default Option;
