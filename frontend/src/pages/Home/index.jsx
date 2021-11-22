import React from 'react';
import casscadelogo from '../../assets/CaSScade.png';
import casscadetext from '../../assets/text.png';
import background from '../../assets/bg.png'

const Home = () => {
  return (
    <div className="">
    <img src={casscadelogo} classname="casscade-logo"/>
    <img src={casscadetext} classname="casscade-logo"/>
    <button className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4" style={{backgroundColor:"#410979"}}>
      LOG IN
      </button>
    <img src={background} classname="casscade-bg"/>
    </div>
  );
};

export default Home;
