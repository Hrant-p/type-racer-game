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
      <p>&rarr; Author: H. Poghosyan</p>
        <p>✌✌✌</p>
    </div>
  </DivWithBackground>
);

export default About;
