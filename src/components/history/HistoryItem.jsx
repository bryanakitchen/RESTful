import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

//eventually apply conditional colored text formatting for each method
const MethodName = styled.span`
  text-transform: uppercase;
  text-content: center;
  font-weight: 500;
`;
  
const URLName = styled.p`
  margin: 0px;
  padding-top: 3px;
  padding-bottom: 3px;
  font-size: 14px;
`;
  // word-wrap: break-word;

const HistoryItem = ({ method, url, id }) => {
  return (
    <article id={id}>
      <MethodName id={id}>{method}</MethodName>
      <URLName id={id}>{url}</URLName>
    </article>
  );
};

HistoryItem.propTypes = {
  method: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default HistoryItem;
