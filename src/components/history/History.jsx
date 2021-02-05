import React from 'react';
import HistoryItem from './HistoryItem';
import PropTypes from 'prop-types';

const History = ({ history }) => {
  const tempHistory = [
    {
      method: 'get',
      url: 'google.com',
    },
    {
      method: 'put',
      url: 'google1.com',
    }
  ];
  
  const historyElements = tempHistory.map((item, i) => {
    return (
      <li key={i}>
        <HistoryItem method={item.method} url={item.url} id={i} />
      </li>
    );
  });

  return (
    <>
      <article>
        <h2>History</h2>
        <ul>
          {historyElements}
        </ul>
      </article>
    </>
  );
};

History.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({
    method: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  })).isRequired
};

export default History;
