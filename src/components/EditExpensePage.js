import React from 'react';
import { connect } from 'react-redux';
import { object, func, shape } from 'prop-types';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses.actions';

const EditExpensePage = ({ expense, dispatch, history }) => (
  <div>
    <ExpenseForm
      expense={expense}
      onSubmit={exp => {
        dispatch(editExpense(expense.id, exp));
        history.push('/');
      }}
    />
    <button
      type="button"
      onClick={() => {
        dispatch(removeExpense({ id: expense.id }));
        history.push('/');
      }}
    >
      Remove
    </button>
  </div>
);

EditExpensePage.defaultProps = {
  history: undefined
};

EditExpensePage.propTypes = {
  // eslint-disable-next-line
  expense: object,
  history: shape(object.isRequired),
  dispatch: func.isRequired
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id)
});

export default connect(mapStateToProps)(EditExpensePage);
