import React from 'react';
import PropTypes from 'prop-types';

class AddOption extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddOption = this.handleAddOption.bind(this);

    this.state = {
      error: undefined
    };
  }

  handleAddOption(event) {
    event.preventDefault();

    const option = event.target.elements.option.value.trim();

    const { handleAddOption } = this.props;

    const error = handleAddOption(option);

    this.setState(() => ({
      error
    }));

    if (!error) {
      event.target.elements.value = '';
    }
  }

  render() {
    const { error } = this.state;
    return (
      <div>
        {error && <p>{error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

AddOption.propTypes = {
  handleAddOption: PropTypes.func.isRequired
};

export default AddOption;
