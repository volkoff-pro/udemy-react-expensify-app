import React from 'react';
import { func, string, shape, object } from 'prop-types';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component {
  static propTypes = {
    onSubmit: func.isRequired,
    expense: shape({
      description: string,
      note: string,
      amount: string,
      createdAt: object
    })
  };

  static defaultProps = {
    expense: undefined
  };

  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false
    };
  }

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

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({
        amount
      }));
    }
  };

  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({
        createdAt
      }));
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({
      calendarFocused: focused
    }));
  };

  onSubmit = event => {
    const { onSubmit } = this.props;
    const { description, amount, createdAt, note } = this.state;

    event.preventDefault();

    if (!description || !amount) {
      this.setState(() => ({
        error: 'Please provide description and amount'
      }));
    } else {
      this.setState(() => ({
        error: ''
      }));

      onSubmit({
        description,
        amount: parseFloat(amount, 10) * 100,
        createdAt: createdAt.valueOf(),
        note
      });
    }
  };

  render() {
    const {
      description,
      note,
      amount,
      createdAt,
      calendarFocused,
      error
    } = this.state;
    return (
      <div>
        {error && <p>{error}</p>}
        <form onSubmit={this.onSubmit}>
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
          <SingleDatePicker
            date={createdAt}
            onDateChange={this.onDateChange}
            focused={calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder="Add a not for your expense (optional)"
            onChange={this.onNoteChange}
            value={note}
          />
          <button type="submit">Add Expense</button>
        </form>
      </div>
    );
  }
}
