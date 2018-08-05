import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

const OptionModal = ({ selectedOption, handleClear }) => (
  <Modal
    isOpen={!!selectedOption}
    onRequestClose={handleClear}
    contentLabel="Selected Option"
  >
    <h3>Selected Option</h3>
    {selectedOption && <p>{selectedOption}</p>}
    <button type="button" onClick={handleClear}>
      Okay
    </button>
  </Modal>
);

OptionModal.defaultProps = {
  selectedOption: undefined
};

OptionModal.propTypes = {
  selectedOption: PropTypes.bool,
  handleClear: PropTypes.func.isRequired
};

export default OptionModal;
