import React, { Component } from 'react';
import History from '../components/history/History';
import Request from '../components/request/Request';
import Response from '../components/response/Response';
import { fetchRequest } from '../services/fetchRequest';

export default class RESTy extends Component {
  state = {
    method: '',
    url: '',
    body: '',
    display: { 'Hi there': 'Please submit a request' }
  }

  handleChange = ({ target }) => {
    // console.log(target.value)
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { url, method, body } = this.state;
    // stringify body???
    
    fetchRequest(url, method, body)
      // .then(this.setState({
      //   method,
      //   url,
      //   body
      // })
      // )
      .then(display => 
        this.setState({ display }));
    // this.setState(display => JSON.stringify(display));
    // fetchRequest(url, method, body)
    // .then(state => (this.setState(JSON.stringify({ state })))
    // );
  }

  render() {
    const { url, method, body, display } = this.state;
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
        <Response display={display} />
      </>
    );
  }
}
