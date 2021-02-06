import React from 'react';
import HistoryItem from './HistoryItem';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ArticleBox = styled.article`
  border: 3px solid gold;
`;

const HistoryHeader = styled.p`
  border: 3px solid lightblue;
  text-align: center;
  font-size: 18px;
  
`;

const HistoryBody = styled.span`
  border: 3px solid blue;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  `;
  
const ListItem = styled.span`
  border: 3px solid lightgreen;
  word-wrap: break-word;
  padding: .3rem;
  margin: 3px;
  `;
  // margin: .5rem;
  // font-size: 1.2rem;

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
        <HistoryBody>
          {historyElements}
        </HistoryBody>
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
