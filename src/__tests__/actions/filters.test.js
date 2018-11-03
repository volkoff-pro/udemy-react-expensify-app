import moment from 'moment';
import {
  setStartDate,
  setEndDate,
  setTextFilter,
  sortByDate,
  sortByAmount
} from '../../actions/filters.actions';

describe('should test filters action generators', () => {
  test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));

    expect(action).toEqual({
      type: 'SET_START_DATE',
      date: moment(0)
    });
  });

  test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));

    expect(action).toEqual({
      type: 'SET_END_DATE',
      date: moment(0)
    });
  });

  test('should generate set text filter action object', () => {
    const action = setTextFilter('some');

    expect(action).toEqual({
      type: 'SET_TEXT_FILTER',
      text: 'some'
    });
  });

  test('should generate set text filter action object with default parameter', () => {
    const action = setTextFilter();

    expect(action).toEqual({
      type: 'SET_TEXT_FILTER',
      text: ''
    });
  });

  test('should generate sort by date filter action object', () => {
    const action = sortByDate();

    expect(action).toEqual({
      type: 'SORT_BY_DATE'
    });
  });

  test('should generate sort by amount filter action object', () => {
    const action = sortByAmount();

    expect(action).toEqual({
      type: 'SORT_BY_AMOUNT'
    });
  });
});
