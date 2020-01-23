import React, { Fragment } from 'react';
import './Home.scss';
import bgImage from '../../img/coder.jpeg';
import DivWithBackground from '../../components/DivWithBackground/DivWithBackground';

const Home = () => {
  return (
    <Fragment>
      <DivWithBackground bgImage={bgImage}>
                Home
      </DivWithBackground>
    </Fragment>
  );
};

Home.propTypes = {};

export default Home;
