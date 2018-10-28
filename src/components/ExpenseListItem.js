import React from 'react';
import { Link } from 'react-router-dom';
import { number, string } from 'prop-types';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      {amount}-{createdAt}
    </p>
  </div>
);

ExpenseListItem.propTypes = {
  id: string.isRequired,
  description: string.isRequired,
  amount: number.isRequired,
  createdAt: number.isRequired
};

export default ExpenseListItem;
