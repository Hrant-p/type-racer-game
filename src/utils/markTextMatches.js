import React from 'react';

export default function (text = '', typed = '', value = '') {
  if (!typed.length || !text.length) {
    return <p>{text}</p>;
  }

  let lastId; let i = 0; let j = 0;
  let newId;

  for (; i < typed.length; i++) {
    if (typed[i] === text[i]) {
      lastId = i;
    }
  }

  for (; j < value.length; j++) {
    if (value[j] === text[j + 1 + lastId]) {
      newId = j;
    }
  }
  if (newId || newId === 0) {
    lastId += newId + 1;
  }

  const newText = (<mark>{text.slice(0, lastId + 1)}</mark>);

  return (
    <p>
      {newText}
      {text.slice(lastId + 1)}
    </p>
  );
}
