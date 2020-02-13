import React from 'react';
import bgImage from '../../img/coder.jpeg';
import DivWithBackground from '../../components/DivWithBackground/DivWithBackground';
import Game from '../Game/Game';

const Home = () => {
  return (
    <DivWithBackground bgImage={bgImage}>
      <Game />
    </DivWithBackground>
  );
};

export default Home;
