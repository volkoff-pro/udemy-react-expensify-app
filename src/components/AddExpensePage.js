import React from 'react';
import { connect } from 'react-redux';
import { func, object, shape } from 'prop-types';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses.actions';

export const AddExpensePage = ({ onSubmit, history }) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm
      onSubmit={expense => {
        onSubmit(expense);
        history.push('/');
      }}
    />
  </div>
);

AddExpensePage.defaultProps = {
  history: undefined
};

AddExpensePage.propTypes = {
  onSubmit: func.isRequired,
  history: shape(object.isRequired)
};

const mapDispatchToProps = dispatch => ({
  onSubmit: expense => dispatch(startAddExpense(expense))
});

export default connect(
  undefined,
  mapDispatchToProps
)(AddExpensePage);
