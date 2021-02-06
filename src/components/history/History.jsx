import React from 'react';
import HistoryItem from './HistoryItem';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ArticleBox = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 30%;
  border: 3px solid purple;
`;

const HistoryHeader = styled.p`
  text-align: center;
  font-size: 18px;
  margin: 3px;
`;

const HistoryBody = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  border: 1px solid blue;
  list-style-type: none;
`;
  
const ListItem = styled.span`
  word-wrap: break-word;
  padding: .3rem;
  margin: 3px;
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
      { (historyElements < 1) 
        ? ' '
        : 
        <ArticleBox>
          <HistoryHeader>History</HistoryHeader>
          <HistoryBody>
            {historyElements}
          </HistoryBody>        
        </ArticleBox>
      }
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
