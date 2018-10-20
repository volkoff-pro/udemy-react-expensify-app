import React from 'react';
import { shape, string, func } from 'prop-types';
import { connect } from 'react-redux';
import {
  setTextFilter,
  sortByDate,
  sortByAmount
} from '../actions/filters.actions';

const ExpenseListFilters = ({ filters, dispatch }) => (
  <div>
    <input
      type="text"
      value={filters.text}
      onChange={e => {
        dispatch(setTextFilter(e.target.value));
      }}
    />
    <select
      value={filters.sortBy}
      onChange={e => {
        if (e.target.value === 'date') {
          dispatch(sortByDate());
        } else if (e.target.value === 'amount') {
          dispatch(sortByAmount());
        }
      }}
    >
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select>
  </div>
);

ExpenseListFilters.propTypes = {
  filters: shape({
    text: string.isRequired
  }).isRequired,
  dispatch: func.isRequired
};

const mapStateToProps = state => ({
  filters: state.filters
});

export default connect(mapStateToProps)(ExpenseListFilters);
