import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ExpenseDashboardPage from '../../src/components/ExpenseDashboardPage';

describe('AddExpensePage component', () => {
  test('should shallow correctly', () => {
    expect(shallow(<ExpenseDashboardPage />)).toMatchSnapshot();
  });
  test('should mount correctly', () => {
    expect(mount(<ExpenseDashboardPage />)).toMatchSnapshot();
  });
  test('should render correctly', () => {
    expect(render(<ExpenseDashboardPage />)).toMatchSnapshot();
  });
});
