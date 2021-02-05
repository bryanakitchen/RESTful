import React from 'react';
import Response from '../response/Response';
import PropTypes from 'prop-types';

const Request = ({ onChange }) => {
  return (
    <>
      <form>
        <input type="text" placeholder="Enter request URL" name="url" onChange={onChange} />
        <div>
          <input type="radio" name="method" value="get" onChange={onChange} />
          <label htmlFor="get">GET</label>

          <input type="radio" name="method" value="post" onChange={onChange} />
          <label htmlFor="post">POST</label>

          <input type="radio" name="method" value="put" onChange={onChange} />
          <label htmlFor="put">PUT</label>

          <input type="radio" name="method" value="patch" onChange={onChange} />
          <label htmlFor="patch">PATCH</label>

          <input 
            type="radio" name="method" value="delete" onChange={onChange} />
          <label htmlFor="delete">DELETE</label>
          <button>Send</button>
        </div>
        <textarea placeholder="Raw JSON Body"></textarea>
      </form>

      <Response />
    </>
  );
};

Request.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default Request;
