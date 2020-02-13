import React from 'react';
import DivWithBackground from '../DivWithBackground/DivWithBackground';
import img from '../../img/about.jpg';
import './About.scss';

const About = () => (
  <DivWithBackground bgImage={img}>
    <div className="about">
      <p>&rarr; Contact Phone: +374-99-99-99</p>
      <p>&rarr; Email: hrant@live.ru</p>
      <p>&rarr; Address: Armenia. Yerevan</p>
      <a href="https:/github.com/Hrant-p/type-racer-game">
          &rarr; Author: H. Poghosyan
      </a>
      <span role="img" aria-label="ok">✌✌✌</span>
    </div>
  </DivWithBackground>
);

export default About;
