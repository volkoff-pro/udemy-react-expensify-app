import React from 'react';
import { object, arrayOf } from 'prop-types';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses.selectors';

const ExpenseList = ({ expenses }) => (
  <div>
    <h1>Expense List</h1>
    {expenses.map(expense => (
      <ExpenseListItem {...expense} key={expense.id} />
    ))}
  </div>
);

ExpenseList.propTypes = {
  expenses: arrayOf(object).isRequired
};

const mapStateToProps = ({ expenses, filters }) => ({
  expenses: selectExpenses(expenses, filters)
});

export default connect(mapStateToProps)(ExpenseList);
