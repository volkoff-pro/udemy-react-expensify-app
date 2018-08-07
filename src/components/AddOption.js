import React from 'react';
import PropTypes from 'prop-types';

class AddOption extends React.Component {
  state = {
    error: undefined
  };

  handleAddOption = event => {
    event.preventDefault();

    const option = event.target.elements.option.value.trim();

    const { handleAddOption } = this.props;

    const error = handleAddOption(option);

    this.setState(() => ({
      error
    }));

    if (!error) {
      event.target.elements.option.value = '';
    }
  };

  render() {
    const { error } = this.state;
    return (
      <div>
        {error && <p>{error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}

AddOption.propTypes = {
  handleAddOption: PropTypes.func.isRequired
};

export default AddOption;
