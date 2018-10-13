import React from 'react';
import { number, string } from 'prop-types';

const ExpenseListItem = ({ description, amount, createdAt }) => (
  <div>
    <h3>{description}</h3>
    <p>
      {amount}-{createdAt}
    </p>
  </div>
);

ExpenseListItem.propTypes = {
  description: string.isRequired,
  amount: number.isRequired,
  createdAt: number.isRequired
};

export default ExpenseListItem;
