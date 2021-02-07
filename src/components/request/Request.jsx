import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// border: solid 1px #F2F9FF;
const TheForm = styled.form`
  padding: 5px;
  border-radius: 5px;
`;

const URLInput = styled.input`
  background: #F2F9FF;
  border-radius: 3px;
`;

const Labels = styled.label`
  background: pink;
  cursor: pointer;
  margin: 3px;
  
  `;
  // figure out selecting input
const Radio = styled.input`
  display: none;

  &:checked + ${Labels} {
    background: yellow;
    align-items: center;
  }
`;

// height: 0;
// width: 0;
// margin-left: 0;

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

        <div>
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
        </div>

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
