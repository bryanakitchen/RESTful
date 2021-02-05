import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Response from './Response';

describe('Response component', () => {
  afterEach(() => cleanup());
  it('renders Response', () => {
    const { asFragment } = render(<Response
      display={[]}
    />);    
      
    expect(asFragment()).toMatchSnapshot();
  });
});
