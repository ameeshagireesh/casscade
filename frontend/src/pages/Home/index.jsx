import React from 'react';
import svgReference from '../../assets/CaSScade.svg'

const Home = () => {
  return (
    <div className="">
    <img src={svgReference} />
    <p className="text-white">a CSS battle </p>
    <button className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4" style={{backgroundColor:"#410979"}}>
      LOG IN
      </button>
    </div>
  );
};

export default Home;
