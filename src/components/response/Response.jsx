import React from 'react';
import ReactJson from 'react-json-view';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ResDiv = styled.div`
  background-color: #F2F9FF;
  padding: 5px;
  border-radius: 5px;
`;


const Response = ({ display }) => {
  return (
    <ResDiv data-testid="display">
      <ReactJson src={display} />
    </ResDiv>
  );
};

Response.propTypes = {
  display: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
};

export default Response;
