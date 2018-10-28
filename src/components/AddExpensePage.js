import React from 'react';
import { connect } from 'react-redux';
import { func, object, shape } from 'prop-types';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses.actions';

const AddExpensePage = ({ dispatch, history }) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm
      onSubmit={expense => {
        dispatch(addExpense(expense));
        history.push('/');
      }}
    />
  </div>
);

AddExpensePage.defaultProps = {
  history: undefined
};

AddExpensePage.propTypes = {
  dispatch: func.isRequired,
  history: shape(object.isRequired)
};

export default connect()(AddExpensePage);
