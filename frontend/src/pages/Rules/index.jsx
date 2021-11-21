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
              All participants will be provided a common static web page design
              to be recreated within 30 minutes. Submissions will be judged
              based on the accuracy of the recreation.
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
              Participants will be split into groups, with a different design
              being assigned to each group. Participants will compete only
              against members of their respective groups. 1 hour will be
              provided for the second round and criteria to determine the
              finalists will be the time taken for submission, accuracy of the
              recreation, and efficiency of the code.
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
              In the final round, participants will be required to create an
              individual website based on the theme ‘clean energy’ by 1:30 PM on
              25th November 2021. Submissions may make use of boiler template
              designs provided by CSI or be built from scratch by the
              participant.
            </p>
          </li>
        </ul>
      </p>
    </div>
  );
};

export default Rules;
