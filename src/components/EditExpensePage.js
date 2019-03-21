import React from 'react';
import { connect } from 'react-redux';
import { object, func, shape } from 'prop-types';
import ExpenseForm from './ExpenseForm';
import { editExpense, startRemoveExpense } from '../actions/expenses.actions';

export const EditExpensePage = ({ expense, editExp, removeExp, history }) => (
  <div>
    <ExpenseForm
      expense={expense}
      onSubmit={exp => {
        editExp(expense.id, exp);
        history.push('/');
      }}
    />
    <button
      type="button"
      onClick={() => {
        removeExp({ id: expense.id });
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
  editExp: func.isRequired,
  removeExp: func.isRequired
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id)
});

const mapDispatchToProps = dispatch => ({
  editExp: (id, expense) => dispatch(editExpense(id, expense)),
  removeExp: data => dispatch(startRemoveExpense(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpensePage);
