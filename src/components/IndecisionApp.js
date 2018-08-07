import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

class IndecisionApp extends Component {
  state = {
    options: [],
    selectedOption: undefined
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({
          options
        }));
      }
    } catch (error) {
      // Do nothing at all
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { options } = this.state;
    if (prevState.options.length !== options.length) {
      const json = JSON.stringify(options);
      localStorage.setItem('options', json);
    }
  }

  componentWillUnmount() {}

  handleDeleteOption = optionToRemove => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }));
  };

  handleDeleteOptions = () => {
    this.setState(() => ({
      options: []
    }));
  };

  handlePick = () => {
    const { options } = this.state;
    const randomNum = Math.floor(Math.random() * options.length);
    const option = options[randomNum];
    this.setState(() => ({ selectedOption: option }));
  };

  handleAddOption = option => {
    const { options } = this.state;
    if (!option) {
      return 'Enter valid value to add item';
    }
    if (options.indexOf(option) > -1) {
      return 'This option already exists';
    }
    this.setState(prevState => ({
      options: prevState.options.concat(option)
    }));
  };

  handleClearSelectedOption = () => {
    this.setState(() => ({
      selectedOption: undefined
    }));
  };

  render() {
    const subtitle = 'Put your life in the hands of a computer';
    const { options, selectedOption } = this.state;

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
            handlePick={this.handlePick}
            hasOptions={options.length > 0}
          />
          <div className="widget">
            <Options
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
              options={options}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal
          handleClear={this.handleClearSelectedOption}
          selectedOption={selectedOption}
        />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};

IndecisionApp.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string)
};

export default IndecisionApp;
