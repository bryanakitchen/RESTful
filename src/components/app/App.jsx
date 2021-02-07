import React from 'react';
import RESTy from '../../containers/RESTy';
import GlobalStyle from '../../globalStyles';
import Header from '../header/Header';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header  />
      <RESTy />
    </>
  );
}
