import React from 'react';
import casscadelogo from '../../assets/CaSScade.png';
import casscadetext from '../../assets/text.png';
import background from '../../assets/bg.png';
import './home.css';

const Home = () => {
  return (
    <div className="">
      <img src={casscadelogo} className="casscade-logo"/>
      <img src={casscadetext} className="casscade-text"/>
      <div>
        <img src={background} className="casscade-bg-home"/>
      </div>
    </div>
  );
};

export default Home;
