import React from 'react';
import ExpenseListConnected from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFilters />
    <ExpenseListConnected />
  </div>
);

export default ExpenseDashboardPage;
