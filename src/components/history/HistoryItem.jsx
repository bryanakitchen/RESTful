import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

//eventually apply conditional colored text formatting for each method
const MethodName = styled.span`
  text-transform: uppercase;
  text-content: center;
  `;
  
const URLName = styled.p`
  margin: 0px;
  padding-top: 5px;
  padding-bottom: 5px;
  `;

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
