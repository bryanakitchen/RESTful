import React from 'react';
import styled from 'styled-components';

//Need to add fonts
const Banner = styled.p`
  text-align: center;
  color: #FEFCFB;
  font-size: 38px;
  margin: 15px;
`;


export default function Header() {
  return (
    <Banner>
        RESTful
    </Banner>
  );
}
