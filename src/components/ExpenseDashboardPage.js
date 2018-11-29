import React from 'react';
import ExpenseListConnected from './ExpenseList';
import ExpenseListFiltersConnected from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFiltersConnected />
    <ExpenseListConnected />
  </div>
);

export default ExpenseDashboardPage;
