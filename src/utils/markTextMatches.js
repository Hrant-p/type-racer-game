import React from 'react';

export default (
  text = '',
  typed = '',
  value = ''
) => {
  let j = 0;
  let commonId;

  if (!value && !typed) {
    return <p>{text}</p>;
  }

  const allText = String.prototype.concat(typed, value);

  for (; j < allText.length; j++) {
    if (text[j] !== allText[j]) break;
    if (text[j] === allText[j]) {
      commonId = j;
    }
  }

  return (
    <p>
      <mark>{text.slice(0, commonId + 1)}</mark>
      {text.slice(commonId + 1)}
    </p>
  );
};
