import React from 'react';
import HistoryItem from './HistoryItem';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ArticleBox = styled.article`
  border: 3px solid gold;
  background: gray;
`;

const HistoryHeader = styled.h2`
  border: 3px solid lightblue;
`;

const HistoryBox = styled.ul`
  border: 3px solid blue;
`;

const ListItem = styled.li`
  border: 3px solid lightgreen;
`;

const History = ({ history }) => {
  const historyElements = history.map((item, i) => {
    return (
      <ListItem key={i}>
        <HistoryItem method={item.method} url={item.url} id={i} />
      </ListItem>
    );
  });

  return (
    <>
      <ArticleBox>
        { (historyElements < 1) ? <p></p> : <HistoryHeader>History</HistoryHeader> }
        <HistoryBox>
          {historyElements}
        </HistoryBox>
      </ArticleBox>
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
