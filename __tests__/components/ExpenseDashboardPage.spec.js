import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboardPage from '../../src/components/ExpenseDashboardPage';

describe('AddExpensePage component', () => {
  test('should shallow correctly', () => {
    expect(shallow(<ExpenseDashboardPage />)).toMatchSnapshot();
  });
});
