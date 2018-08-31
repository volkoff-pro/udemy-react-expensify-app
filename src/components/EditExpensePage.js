import React from 'react';

const EditExpensePage = ({ match }) => (
  <div>Editing expense with id of {match.params.id}</div>
);

export default EditExpensePage;
