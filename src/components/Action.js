import React from 'react';
import PropTypes from 'prop-types';

const Action = ({ hasOptions, handlePick }) => (
  <div>
    <button type="button" disabled={!hasOptions} onClick={handlePick}>
      What should I do?
    </button>
  </div>
);

Action.propTypes = {
  hasOptions: PropTypes.bool.isRequired,
  handlePick: PropTypes.func.isRequired
};

export default Action;
