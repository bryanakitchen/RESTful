import React, { Component } from 'react';
import History from '../components/history/History';
import Request from '../components/request/Request';
import Response from '../components/response/Response';
import { fetchRequest } from '../services/fetchRequest';
import styled from 'styled-components';

const ContainerDiv = styled.div`
  display: flex;
`;

const ResDiv = styled.div`
  border: 3px solid red;
  border-radius: 5px;
  padding: 3px;
`;

export default class RESTy extends Component {
  state = {
    method: '',
    url: '',
    body: '',
    display: { 'Hi there': 'Please submit a request' },
    history: JSON.parse(localStorage.getItem('RESTful History') || '[]') 
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { url, method, body } = this.state;
    
    fetchRequest(url, method, body)
      .then(display => 
        this.setState({ display }));

    this.setState(state => ({ 
      history: [...state.history, { url, method }]
    }), 
    () => localStorage.setItem(
      'RESTful History', 
      JSON.stringify(this.state.history)
    ));
    
  }

  render() {
    const { url, method, body, display, history } = this.state;
    return (
      <>
        <ContainerDiv>
          <History history={history} />

          <ResDiv>
            <Request 
              onChange={this.handleChange} 
              onSubmit={this.handleSubmit}
              url={url}
              method={method} 
              body={body}
            />

            <Response display={display} />
          </ResDiv>

        </ContainerDiv>
      </>
    );
  }
}
