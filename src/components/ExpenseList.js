import React from 'react';
import { object, arrayOf } from 'prop-types';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses.selectors';

export const ExpenseList = ({ expenses }) => (
  <div>
    {expenses.length === 0 ? (
      <p>No expenses</p>
    ) : (
      expenses.map(expense => <ExpenseListItem key={expense.id} {...expense} />)
    )}
  </div>
);

ExpenseList.propTypes = {
  expenses: arrayOf(object).isRequired
};

const mapStateToProps = ({ expenses, filters }) => ({
  expenses: selectExpenses(expenses, filters)
});

export default connect(mapStateToProps)(ExpenseList);
