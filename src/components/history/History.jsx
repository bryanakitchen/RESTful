import React from 'react';
import HistoryItem from './HistoryItem';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HistoryDiv = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 30%;
`;

const HistoryHeader = styled.p`
  text-align: center;
  font-size: 18px;
  margin: 3px;
  color: #DEE4F7;
`;
// 1282A2  FEFCFB  EBF5FE
const HistoryBody = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  border: 1px solid #034078;
  border-radius: 8px;
  background: #0A1128;
  color: #1282A2;
`;
  
const ListItem = styled.span`
  word-wrap: break-word;
  padding: .3rem;
  margin: 3px;
  max-width: 90%;
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
        <HistoryDiv>
          <HistoryHeader>History</HistoryHeader>
          <HistoryBody>
            {historyElements}
          </HistoryBody>        
        </HistoryDiv>
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
