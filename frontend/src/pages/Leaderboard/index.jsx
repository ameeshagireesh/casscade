import React from 'react';
import "./index.css";
import background from '../../assets/bg.png';

const Leaderboard = () => {
  return (
    <>
      <div className="leaderboard-page">
        <table className="leaderboard">
          <thead class="header"> 
          <tr className="heading">
            <th>Rank</th>
            <th>Username</th>
            <th>Score</th>
          </tr>
          </thead>

          <tbody>
            <tr className="names">
              <td>21</td>
              <td>Kadambari03</td>
              <td>3300</td>
            </tr>
            <tr className="black-row">
            </tr>
            <tr className="names">
              <td>21</td>
              <td>Kadambari03</td>
              <td>3300</td>
            </tr>
            <tr className="black-row">
            </tr>
            <tr className="names">
              <td>21</td>
              <td>Kadambari03</td>
              <td>3300</td>
            </tr>
            <tr className="black-row">
            </tr>
            <tr className="names">
              <td>21</td>
              <td>Kadambari03</td>
              <td>3300</td>
            </tr>
            <tr className="black-row">
            </tr>
            <tr className="names">
              <td>21</td>
              <td>Kadambari03</td>
              <td>3300</td>
            </tr>
            <tr className="black-row">
            </tr>
            <tr className="names">
              <td>21</td>
              <td>Kadambari03</td>
              <td>3300</td>
            </tr>
            <tr className="black-row">
            </tr>
            <tr className="names">
              <td>21</td>
              <td>Kadambari03</td>
              <td>3300</td>
            </tr>
            <tr className="black-row">
            </tr>
            <tr className="names">
              <td>21</td>
              <td>Kadambari03</td>
              <td>3300</td>
            </tr>
            <tr className="black-row">
            </tr>
            <tr className="names">
              <td>21</td>
              <td>Kadambari03</td>
              <td>3300</td>
            </tr>
            <tr className="black-row">
            </tr>
            <tr className="names">
              <td>21</td>
              <td>Kadambari03</td>
              <td>3300</td>
            </tr>
          </tbody>
        </table>
        <div>
        <img src={background} className="casscade-bg-leaderboard"/>
      </div>
      </div>
    </>
  );
};

export default Leaderboard;