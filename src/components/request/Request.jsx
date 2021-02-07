import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TheForm = styled.form`
  padding: 5px;
  border-radius: 5px;
  background: #E9ECEF;
`;

const RadioDiv = styled.div`
  margin-bottom: 10px;
`;

const URLInput = styled.input`
  border-radius: 3px;
  margin-bottom: 10px;
  border: 1px solid gray;
  padding: 3px;
`;

const Labels = styled.label`
background: #e9ecef;
color: #001F54;
  cursor: pointer;
  margin: 4px;
  padding: 3px;
`;

const Radio = styled.input`
  display: none;

  &:checked + ${Labels} {
    background: #034078;
    color: #E9ECEF;
    align-items: center;
    border: 2px solid #101C41;
    border-radius: 3px;
  }
`;

const Request = ({ onChange, onSubmit, url, method, body }) => {
  return (
    <>
      <TheForm onSubmit={onSubmit} >

        <URLInput 
          type="text" 
          placeholder="Enter request URL" 
          name="url" 
          value={url}
          onChange={onChange} />

        <RadioDiv>
          <Radio 
            id="get"
            type="radio" 
            name="method" 
            value="get" 
            checked={method === 'get'}
            onChange={onChange} />
          <Labels htmlFor="get">GET</Labels>

          <Radio 
            id="post"
            type="radio" 
            name="method" 
            value="post"
            checked={method === 'post'}
            onChange={onChange} />
          <Labels htmlFor="post">POST</Labels>

          <Radio 
            id="put"
            type="radio" 
            name="method" 
            value="put"
            onChange={onChange} />
          <Labels htmlFor="put">PUT</Labels>

          <Radio 
            id="delete"
            type="radio" 
            name="method" 
            value="delete"
            checked={method === 'delete'}
            onChange={onChange} />
          <Labels htmlFor="delete">DELETE</Labels>

          <button>Send</button>
        </RadioDiv>

        <textarea 
          placeholder="Raw JSON Body" 
          rows="10" 
          cols="50" 
          name="body" 
          value={body}
          onChange={onChange} ></textarea>
      </TheForm>
    </>
  );
};

Request.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  body: PropTypes.string 
};

export default Request;
