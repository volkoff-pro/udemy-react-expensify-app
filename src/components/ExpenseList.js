import React from 'react';
import { object, arrayOf } from 'prop-types';
import { connect } from 'react-redux';

const ExpenseList = ({ expenses, filters }) => (
  <div>
    <h1>Expense List</h1>
    {filters.text}
    {expenses.length}
  </div>
);

ExpenseList.propTypes = {
  expenses: arrayOf(object).isRequired,
  filters: arrayOf(object).isRequired
};

const mapStateToProps = ({ expenses, filters }) => ({
  expenses,
  filters
});

export default connect(mapStateToProps)(ExpenseList);
