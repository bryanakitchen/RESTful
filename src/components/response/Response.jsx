import React from 'react';
import ReactJson from 'react-json-view';
import PropTypes from 'prop-types';

const Response = ({ display }) => {
  return (
    <div>
      <h3>Response</h3>
      <ReactJson src={display} />
    </div>
  );
};

Response.propTypes = {
  display: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
};

export default Response;
