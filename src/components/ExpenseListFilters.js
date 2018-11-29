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

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    const { setStartDateD, setEndDateD } = this.props;
    setStartDateD(startDate);
    setEndDateD(endDate);
  };

  onFocusChange = calendarFocused => {
    this.setState(() => ({
      calendarFocused
    }));
  };

  onTextChange = e => {
    const { setTextFilterD } = this.props;
    setTextFilterD(e.target.value);
  };

  onSortChange = e => {
    const { sortByAmountD, sortByDateD } = this.props;
    if (e.target.value === 'date') {
      sortByDateD();
    } else if (e.target.value === 'amount') {
      sortByAmountD();
    }
  };

  render() {
    const { filters } = this.props;
    const { calendarFocused } = this.state;
    return (
      <div>
        <input type="text" value={filters.text} onChange={this.onTextChange} />
        <select value={filters.sortBy} onChange={this.onSortChange}>
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
  setStartDateD: func.isRequired,
  setEndDateD: func.isRequired,
  setTextFilterD: func.isRequired,
  sortByAmountD: func.isRequired,
  sortByDateD: func.isRequired
};

const mapStateToProps = state => ({
  filters: state.filters
});

const mapDispatchToProps = dispatch => ({
  setTextFilterD: text => dispatch(setTextFilter(text)),
  sortByDateD: () => dispatch(sortByDate()),
  sortByAmountD: () => dispatch(sortByAmount()),
  setStartDateD: startDate => dispatch(setStartDate(startDate)),
  setEndDateD: endDate => dispatch(setEndDate(endDate))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseListFilters);
