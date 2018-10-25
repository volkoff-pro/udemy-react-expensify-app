import React from 'react';

export default class ExpenseForm extends React.Component {
  state = {
    description: '',
    note: '',
    amount: ''
  };

  onDescriptionChange = event => {
    const description = event.target.value;
    this.setState(() => ({
      description
    }));
  };

  onNoteChange = event => {
    const note = event.target.value;
    this.setState(() => ({
      note
    }));
  };

  onAmountChange = event => {
    const amount = event.target.value;

    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({
        amount
      }));
    }
  };

  render() {
    const { description, note, amount } = this.state;
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            value={amount}
            onChange={this.onAmountChange}
          />
          <textarea
            placeholder="Add a not for your expense (optional)"
            onChange={this.onNoteChange}
            value={note}
          />
          <button type="button">Add Expense</button>
        </form>
      </div>
    );
  }
}
