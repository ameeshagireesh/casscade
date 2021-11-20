import React from 'react';
import './index.css';
import listIcon from '../../assets/listicon.svg'

const Rules = () => {
  return (
    <div className="container mx-auto">
      <p className="text-white">
        <ul className="list" style={{listStyleImage:listIcon}}>
          <li>
            ROUND 1:
            <br />
            All participants will be provided a common static web page design to
            be recreated within 30 minutes. Submissions will be judged based on
            the accuracy of the recreation.
          </li>
          <br />
          <li>
            ROUND 2:
            <br />
            Participants will be split into groups, with a different design
            being assigned to each group. Participants will compete only against
            members of their respective groups. 1 hour will be provided for the
            second round and criteria to determine the finalists will be the
            time taken for submission, accuracy of the recreation, and
            efficiency of the code.
          </li>
          <br />
          <li>
            ROUND 3:
            <br />
            In the final round, participants will be required to create an
            individual website based on the theme ‘clean energy’ by 1:30 PM on
            25th November 2021. Submissions may make use of boiler template
            designs provided by CSI or be built from scratch by the participant.
            <br />
          </li>
        </ul>
      </p>
    </div>
  );
};

export default Rules;
