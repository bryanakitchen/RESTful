import React from 'react';
import { render, cleanup } from '@testing-library/react';
import History from './History';

describe('History component', () => {
  afterEach(() => cleanup());
  it('renders History', () => {
    const { asFragment } = render(<History
      history={[
        {
          method: 'get',
          url: 'google.com',
          id: 0
        },
        {
          method: 'put',
          url: 'google1.com',
          id: 1
        }
      ]}
    />);    
      
    expect(asFragment()).toMatchSnapshot();
  });
});
