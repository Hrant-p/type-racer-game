import React, { useState } from 'react';
import './Game.scss';
import PropTypes from 'prop-types';

const Game = () => {
  const [typedText, setTypedText] = useState(null);
  const handleChange = ({ target: { value } }) => {
    setTypedText(value);
  };
  return (
    <div className="game">
            Type Racer Game
        <button>Start Game</button>
      <p>
        {null}
      </p>
      <input
        type="text"
        value={typedText}
        onChange={handleChange}
      />
    </div>
  );
};

Game.propTypes = {

};

export default Game;
