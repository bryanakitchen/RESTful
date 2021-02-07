// eslint-disable-next-line no-undef
global.fetch = require('node-fetch');
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import RESTy from './RESTy';

describe('RESTy container', () => {
  it('Changes display when user inputs url', () => {
    render(<RESTy />);   
    
    const urlInput = screen.getByPlaceholderText('Enter request URL');

    fireEvent.change(urlInput, {
      target: {
        value: 'https://jsonplaceholder.typicode.com/posts/1'
      }
    });

    return waitFor(() => {
      expect(screen.getByTestId('display'))
        .not.toBeEmptyDOMElement();
    });
  }
  );
});
