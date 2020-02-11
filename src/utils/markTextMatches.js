import React from 'react';
import styled from 'styled-components';

const P = styled.p`
  user-select: none;
  font-size: 1.25rem;
  font-family: Ubuntu,serif;
  margin: 0;
`;

const Mark = styled.mark`
  user-select: auto;
  font-weight: 300;
  background-color: lightgreen;
  color: #3a0135;
  margin: 0;
`;

export default (
  text = '',
  typed = '',
  value = ''
) => {
  let j = 0;
  let commonId;

  if (!value && !typed) {
    return <P>{text}</P>;
  }

  const allText = String.prototype.concat(typed, value);

  for (; j < allText.length; j++) {
    if (text[j] !== allText[j]) break;
    if (text[j] === allText[j]) {
      commonId = j;
    }
  }

  return (
    <P>
      <Mark>
        {text.slice(0, commonId + 1)}
      </Mark>
      {text.slice(commonId + 1)}
    </P>
  );
};
