import React from 'react';
import { shallow, mount, render } from 'enzyme';
import AddExpensePage from '../../src/components/AddExpensePage';

describe('AddExpensePage component', () => {
  test('should shallow correctly', () => {
    expect(shallow(<AddExpensePage />)).toMatchSnapshot();
  });
  test('should mount correctly', () => {
    expect(mount(<AddExpensePage />)).toMatchSnapshot();
  });
  test('should render correctly', () => {
    expect(render(<AddExpensePage />)).toMatchSnapshot();
  });
});
