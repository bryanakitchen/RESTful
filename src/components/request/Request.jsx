import React from 'react';
import PropTypes from 'prop-types';

const Request = ({ onChange, onSubmit, url, method, body }) => {
  return (
    <>
      <form onSubmit={onSubmit} >

        <input 
          type="text" 
          placeholder="Enter request URL" 
          name="url" 
          value={url}
          onChange={onChange} />

        <div>
          <input 
            type="radio" 
            name="method" 
            value="get" 
            checked={method === 'get'}
            onChange={onChange} />
          <label htmlFor="get">GET</label>

          <input 
            type="radio" 
            name="method" 
            value="post"
            checked={method === 'post'}
            onChange={onChange} />
          <label htmlFor="post">POST</label>

          <input 
            type="radio" 
            name="method" 
            value="put"
            checked={method === 'put'}
            onChange={onChange} />
          <label htmlFor="put">PUT</label>

          <input 
            type="radio" 
            name="method" 
            value="delete"
            checked={method === 'delete'}
            onChange={onChange} />
          <label htmlFor="delete">DELETE</label>

          <button>Send</button>
        </div>

        <textarea 
          placeholder="Raw JSON Body" 
          rows="10" 
          cols="50" 
          name="body" 
          value={body}
          onChange={onChange} ></textarea>
      </form>
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
