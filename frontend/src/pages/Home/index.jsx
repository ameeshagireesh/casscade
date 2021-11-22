import React from 'react';
import casscadelogo from '../../assets/CaSScade.png';
import casscadetext from '../../assets/text.png';
import background from '../../assets/bg.png';
import './index.css';

const Home = () => {
  return (
    <div className="">
      <img src={casscadelogo} className="casscade-logo"/>
      <img src={casscadetext} className="casscade-text"/>
      <div className="login-position">
        <button className="login" >
          LOG IN
        </button>
      </div>
      <div>
        <img src={background} className="casscade-bg"/>
      </div>
    </div>
  );
};

export default Home;
