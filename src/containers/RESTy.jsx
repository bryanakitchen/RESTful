import React, { Component } from 'react';
import History from '../components/history/History';
import Request from '../components/request/Request';

export default class RESTy extends Component {
  state = {
    method: '',

  }

  handleChange = ({ target }) => {
      console.log(target.value);
    this.setState({ [target.name]: target.value });
}
  render() {
    return (
      <>
        <History history={history} />
        <Request onChange={this.handleChange} />
      </>
    );
  }
}
