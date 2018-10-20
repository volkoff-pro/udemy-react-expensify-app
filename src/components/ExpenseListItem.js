import React from 'react';
import { connect } from 'react-redux';
import { number, string, func } from 'prop-types';
import { removeExpense } from '../actions/expenses.actions';

const ExpenseListItem = ({ id, description, amount, createdAt, dispatch }) => (
  <div>
    <h3>{description}</h3>
    <p>
      {amount}-{createdAt}
    </p>
    <button
      type="button"
      onClick={() => {
        dispatch(removeExpense({ id }));
      }}
    >
      Remove
    </button>
  </div>
);

ExpenseListItem.propTypes = {
  id: string.isRequired,
  description: string.isRequired,
  amount: number.isRequired,
  createdAt: number.isRequired,
  dispatch: func.isRequired
};

export default connect()(ExpenseListItem);
