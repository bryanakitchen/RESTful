import React from 'react';
import Response from '../response/Response';

const Request = () => {
  return (
    <>
      <form>
        <input type="text" placeholder="Enter request URL" />
        <div>
          <input type="radio" name="method" value="get" />
          <label htmlFor="get">GET</label>

          <input type="radio" name="method" value="post" />
          <label htmlFor="post">POST</label>

          <input type="radio" name="method" value="put" />
          <label htmlFor="put">PUT</label>

          <input type="radio" name="method" value="patch" />
          <label htmlFor="patch">PATCH</label>

          <input type="radio" name="method" value="delete" />
          <label htmlFor="delete">DELETE</label>
          <button>Send</button>
        </div>
        <textarea placeholder="Raw JSON Body"></textarea>
      </form>

      <Response />
    </>
  );
};

export default Request;
