import React from 'react';
import DivWithBackground from '../DivWithBackground/DivWithBackground';
import Spinner from "../Spinner/Spinner";

function NotFound(props) {
  return (
    <DivWithBackground bgImage={null}>
      <h1 className="x-large text-primary">
                Page Not Found...
      </h1>
      {/*<br />*/}
      {/*<p>Sorry, this page does not exist</p>*/}
        <Spinner/>
    </DivWithBackground>
  );
}

export default NotFound;
