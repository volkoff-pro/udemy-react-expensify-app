import React from 'react';
import { object } from 'prop-types';

const EditExpensePage = ({ match }) => (
  <div>Editing expense with id of {match.params.id}</div>
);

EditExpensePage.propTypes = {
  // eslint-disable-next-line
  match: object
};

export default EditExpensePage;
