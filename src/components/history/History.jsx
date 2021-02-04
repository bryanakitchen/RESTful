import React from 'react';
import HistoryItem from './HistoryItem';
import PropTypes from 'prop-types';

const History = () => {
  // const historyElements = history.map((item, i) => {
  //   return (
  //     <li key={i}>
  //       <HistoryItem history={history} />
  //     </li>
  //   );
  // });

  return (
    <>
      <article>
        <h2>History</h2>
        <ul>
          {/* {historyElements} */}
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
