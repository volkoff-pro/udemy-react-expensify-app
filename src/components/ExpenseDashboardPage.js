import React from 'react';
import ExpenseListConnected from './ExpenseList';
import ExpenseListFiltersConnected from './ExpenseListFilters';
import ExpensesConnectedSummary from './ExpensesSummary';

const ExpenseDashboardPage = () => (
  <div>
    <ExpensesConnectedSummary />
    <ExpenseListFiltersConnected />
    <ExpenseListConnected />
  </div>
);

export default ExpenseDashboardPage;
