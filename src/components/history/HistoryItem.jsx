import React from 'react';
import PropTypes from 'prop-types';

const HistoryItem = ({ method, url, id }) => {
  return (
    <article id={id}>
      <h3 id={id}>{method}</h3>
      <p id={id}>{url}</p>
    </article>
  );
};

HistoryItem.propTypes = {
  method: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default HistoryItem;
