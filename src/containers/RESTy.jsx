import React, { Component } from 'react';
import History from '../components/history/History';
import Request from '../components/request/Request';
import { fetchRequest } from '../services/fetchRequest';

export default class RESTy extends Component {
  state = {
    method: '',
    url: '',
    body: ''
  }

  handleChange = ({ target }) => {
    // console.log(target.value)
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    fetchRequest(this.state.url, this.state.method)
      .then(this.setState({
        method: this.state.method,
        url: this.state.url
      })
      );

  }

  render() {
    const { url, method, body } = this.state;
    return (
      <>
        <History history={history} />

        <Request 
          onChange={this.handleChange} 
          onSubmit={this.handleSubmit}
          url={url}
          method={method} 
          body={body}
        />
      </>
    );
  }
}
