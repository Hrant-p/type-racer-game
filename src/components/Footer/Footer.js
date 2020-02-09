import React from 'react';
import styled from 'styled-components';

const StyledP = styled.p`
  color: white;
  text-shadow: 1px 1px 1px silver;
    @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

const Footer = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'indigo'
  }}
  >
    <StyledP>
      {new Date().getFullYear()}
      {' '}
© ✨ Developed with React & Redux By Hrant Poghosyan 👌
    </StyledP>
  </div>
);

export default Footer;
