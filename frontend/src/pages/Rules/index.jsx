import React from 'react';
import './index.css'; 
import listIcon from '../../assets/listicon.svg';
import background from '../../assets/bg.png';

const Rules = () => {
  return (
    // <div className="container mx-auto my-20 ">
    <div>
      <p className="rules-container text-white font-semibold text-xl ">
        <ul>
          <li>
            <img src={listIcon} className="inline-block" /> &nbsp;
            <p className="inline" style={{ color: '#F1BD12' }}>
              ROUND 1:
            </p>
            <br />
            <p style={{ paddingLeft: '2.5rem' }}>
            All participants will be a part of this round. The main objective of this round will be to visually replicate the 
            target image using HTML/CSS as accurately as possible. You will be divided into groups and will be given 30 minutes 
            to complete this round, with 15 minutes to make submissions. The score will be calculated by taking into account two things: 
              <ol className="sub-rules"> 
                <li>1. How accurately you have replicated the image given </li>
                <li> 2. Number of characters in the code. </li>
              </ol>
            <p style={{ paddingTop: '1.5rem'}}>
            Better the match and lesser the number of lines of code, higher the score. <br />
            Platform: -- Discord <br /> </p>
            </p>
          </li>
          <br />
          <li>
            <img src={listIcon} className="inline-block" /> &nbsp;
            <p className="inline" style={{ color: '#F1BD12' }}>
              ROUND 2:
            </p>
            <br />
            <p style={{ paddingLeft: '2.5rem' }}>
            The people who passed the previous round will participate in this round. The participants will be divided 
            into groups and each group will compete amongst themselves. The objective of this round will be to replicate 
            the target image using HTML/CSS.  The round participants will be judged on time taken, efficiency of code, and 
            recreation accuracy. The duration of this round will be 30 minutes as well, with 15 minutes to make submissions. <br />
            <p style={{ paddingTop: '1.5rem'}}>
            Platform: -- Discord <br /> </p>
            </p>
          </li>
          <br />
          <li>
            <img src={listIcon} className="inline-block" /> &nbsp;
            <p className="inline" style={{ color: '#F1BD12' }}>
              ROUND 3:
            </p>
            <br />
            <p style={{ paddingLeft: '2.5rem' , paddingBottom: ''}}>
            The final round will require the participants to replicate an entire website using HTML/CSS. The duration 
            for this round will be 24 hours, by the end of which the participants should have a static website prepared which 
            includes their own designs. Theme will be revealed after round 2. <br />
            <p style={{ paddingTop: '1.5rem'}}>
            Platform: -- Discord <br /> </p>
            </p>
          </li>
        </ul>
      </p>
      <img src={background} className="casscade-bg-rules"/>
    </div>
  );
};

export default Rules;
