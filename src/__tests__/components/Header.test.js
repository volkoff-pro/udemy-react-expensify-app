import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

test('should render Header correctly', () => {
  const renderer = shallow(<Header />);
  expect(renderer).toMatchSnapshot();
});
