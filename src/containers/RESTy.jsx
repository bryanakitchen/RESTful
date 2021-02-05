import React, { Component } from 'react';
import History from '../components/history/History';
import Request from '../components/request/Request';

export default class RESTy extends Component {
  state = {

  }
  
  render() {
    return (
      <>
        <History history={history} />
        <Request />
      </>
    );
  }
}
