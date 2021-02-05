import React from 'react';
import HistoryItem from './HistoryItem';
import PropTypes from 'prop-types';

const History = ({ history }) => {
  const historyElements = history.map((item, i) => {
    return (
      <li key={i}>
        <HistoryItem method={item.method} url={item.url} id={i} />
      </li>
    );
  });

  return (
    <>
      <article>
        { (historyElements < 1) ? <p></p> : <h2>History</h2> }
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
    url: PropTypes.string.isRequired
  }))
};

export default History;
