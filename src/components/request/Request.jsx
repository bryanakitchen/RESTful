import React from 'react';
import Response from '../response/Response';
import PropTypes from 'prop-types';

const Request = ({ onChange, onSubmit, url, method }) => {
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
            value="patch" 
            checked={method === 'patch'}
            onChange={onChange} />
          <label htmlFor="patch">PATCH</label>

          <input 
            type="radio" 
            name="method" 
            value="delete" 
            checked={method === 'delete'}
            onChange={onChange} />
          <label htmlFor="delete">DELETE</label>

          <button>Send</button>
        </div>

        <textarea placeholder="Raw JSON Body" onChange={onChange} ></textarea>
      </form>

      <Response />
    </>
  );
};

Request.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired 
};

export default Request;
