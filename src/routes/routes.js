import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePageConnected from '../components/AddExpensePage';
import EditExpensePageConnected from '../components/EditExpensePage';
import ExpenseHelpPage from '../components/ExpenseHelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const routes = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={ExpenseDashboardPage} />
        <Route path="/create" component={AddExpensePageConnected} />
        <Route path="/edit/:id" component={EditExpensePageConnected} />
        <Route path="/help" component={ExpenseHelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default routes;
