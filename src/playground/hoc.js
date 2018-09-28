import React from 'react';
import ReactDOM from 'react-dom';
import { string } from 'prop-types';
import { getDisplayName } from 'recompose';

const Info = ({ info }) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {info}</p>
  </div>
);

const withAdminWarning = WrappedComponent => {
  const WithAdminWarning = props => (
    <div>
      <p>This is private info. Please don&apos;t share!</p>
      <WrappedComponent {...props} />
    </div>
  );

  WithAdminWarning.displayName = `withAdminWarning(${getDisplayName(
    WrappedComponent
  )})`;
  return WithAdminWarning;
};

const AdminInfo = withAdminWarning(Info);

Info.propTypes = {
  info: string.isRequired
};

ReactDOM.render(
  <AdminInfo info="There are the details" />,
  document.getElementById('app')
);
