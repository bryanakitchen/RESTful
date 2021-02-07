import React from 'react';
import ReactJson from 'react-json-view';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ResDiv = styled.div`
  background: #E9ECEF;
  padding: 5px;
  border-radius: 5px;
  margin-top: 10px;
  overflow-y: auto;
  max-height: 50vh;
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
