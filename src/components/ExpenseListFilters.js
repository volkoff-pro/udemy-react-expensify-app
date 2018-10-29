import React from 'react';
import { shape, string, func } from 'prop-types';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from '../actions/filters.actions';

class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    const { dispatch } = this.props;
    dispatch(setStartDate(startDate));
    dispatch(setEndDate(endDate));
  };

  onFocusChange = calendarFocused => {
    this.setState(() => ({
      calendarFocused
    }));
  };

  render() {
    const { filters, dispatch } = this.props;
    const { calendarFocused } = this.state;
    return (
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
        <DateRangePicker
          startDate={filters.startDate}
          endDate={filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates
        />
      </div>
    );
  }
}

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
