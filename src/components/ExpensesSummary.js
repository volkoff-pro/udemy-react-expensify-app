import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import { number } from 'prop-types';
import selectExpenses from '../selectors/expenses.selectors';
import selectExpensesTotal from '../selectors/expenses.total';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');

  return (
    <div>
      <h1>
        Viewing {expenseCount} {expenseWord} expenses totalling{' '}
        {formattedExpensesTotal}
      </h1>
    </div>
  );
};

ExpensesSummary.defaultProps = {
  expenseCount: 0,
  expensesTotal: 0
};

ExpensesSummary.propTypes = {
  expenseCount: number,
  expensesTotal: number
};

const mapStateToProps = state => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
