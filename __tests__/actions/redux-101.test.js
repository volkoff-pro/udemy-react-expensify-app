import {
  setCount,
  resetCount,
  incrementCount,
  decrementCount
} from '../../src/playground/redux-101';

describe('actions', () => {
  it('should be an action to reset count', () => {
    const expectedAction = {
      type: 'RESET'
    };
    expect(resetCount()).toEqual(expectedAction);
  });
});
