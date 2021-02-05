import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Request from './Request';

describe('Request component', () => {
  afterEach(() => cleanup());
  it('renders Request', () => {
    const { asFragment } = render(<Request
      onChange={jest.fn()} 
      onSubmit={jest.fn()} 
      url="www.google.com"
      method="get" 
      body="{}"
    />);    
      
    expect(asFragment()).toMatchSnapshot();
  });
});
