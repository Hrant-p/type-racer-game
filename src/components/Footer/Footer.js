import React from 'react';
import styled from 'styled-components';

const StyledP = styled.p`
  color: #aea7f5;
  text-shadow: 1px 0.5px 1px silver;
    @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

const Footer = () => (
  <div style={{
    height: '7.5vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'indigo'
  }}
  >
    <StyledP>
      {new Date().getFullYear()}
      {' '}
© ✨ Created with React & Redux By Hrant Poghosyan 👌
    </StyledP>
  </div>
);

export default Footer;
