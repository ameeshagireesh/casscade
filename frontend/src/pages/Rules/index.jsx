import React from 'react';
import './index.css'; 
import listIcon from '../../assets/listicon.svg';

const Rules = () => {
  return (
    <div className="container mx-auto my-20 ">
      <p className="text-white font-semibold text-xl ">
        <ul>
          <li>
            <img src={listIcon} className="inline-block" /> &nbsp;
            <p className="inline" style={{ color: '#F1BD12' }}>
              ROUND 1:
            </p>
            <br />
            <p style={{ paddingLeft: '2.5rem' }}>
            All participants will be a part of this round. The main objective of this round will be to visually replicate the target image 
            using HTML/CSS as accurately as possible. You will be divided into groups and will be given 30 minutes to complete this round. 
            The score will be calculated by taking into account two things: <br />
                  How accurately you have replicated the image given? <br />
                  The number of characters in the code <br />
            
            Better the match and the lesser the number of lines of code, the higher the score! <br />
            
            Platform: Discord <br />
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
            The people who passed the previous round will participate in this round. The participants will be divided into groups and 
            each group will compete amongst themselves. The objective of this round will be to replicate the target image using HTML/CSS. 
            The round participants will be judged on time taken, the efficiency of code, and recreation accuracy. The duration of this round 
            will be 1 hour. <br />
            
            Platform: Discord <br />
            </p>
          </li>
          <br />
          <li>
            <img src={listIcon} className="inline-block" /> &nbsp;
            <p className="inline" style={{ color: '#F1BD12' }}>
              ROUND 3:
            </p>
            <br />
            <p style={{ paddingLeft: '2.5rem' }}>
            The final round will require the participants to replicate an entire website using HTML/CSS. The duration for this round 
            will be 24 hours, by the end of which the participants should have a static website prepared that includes their own 
            designs. <br />
            
            Platform: Discord <br />
            </p>
          </li>
        </ul>
      </p>
    </div>
  );
};

export default Rules;
