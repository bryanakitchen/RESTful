import React, { Component } from 'react';
import History from '../components/history/History';
import Request from '../components/request/Request';

export default class RESTy extends Component {
  state = {
    method: '',
    url: '',
    body: ''
  }

  handleChange = ({ target }) => {
    console.log(target.value)
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    // this.setState(this.state => {
    //   method: this.state.method,
    //   url: this.state.url
    // });
  }

  render() {
    const { url, method } = this.state;
    return (
      <>
        <History history={history} />

        <Request 
          onChange={this.handleChange} 
          onSubmit={this.handleSubmit}
          url={url}
          method={method} 
        />
      </>
    );
  }
}
