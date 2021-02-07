import React from 'react';
import HistoryItem from './HistoryItem';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HistoryDiv = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 30%;
  background: #0A1128;
  border-radius: 5px;
  margin: 0px 5px 0px 10px;
`;

const HistoryHeader = styled.p`
  text-align: center;
  font-size: 20px;
  margin: 6px 3px;
  color: #E9ECEF;
`;

const HistoryBody = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: #001F54;
  margin: 5px;
  `;
  
const ListItem = styled.span`
  word-wrap: break-word;
  padding: .3rem;
  margin: 3px;
  max-width: 90%;
  border: 1px solid #034078;
  border-radius: 8px;
  background: #E9ECEF;


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
