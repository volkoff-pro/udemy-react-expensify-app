import React from 'react';
import PropTypes from 'prop-types';

const Option = ({ option, handleDeleteOption }) => (
  <div>
    {option}
    <button
      type="button"
      onClick={() => {
        handleDeleteOption(option);
      }}
    >
      remove
    </button>
  </div>
);

Option.propTypes = {
  option: PropTypes.string.isRequired,
  handleDeleteOption: PropTypes.func.isRequired
};

export default Option;
