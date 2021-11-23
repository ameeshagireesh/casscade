import React, { useState, useEffect } from 'react';
import "./index.css";
import background from '../../assets/bg.png';

const Leaderboard = () => {

  const [arr, setArr] = useState([]);

  const getLeaderboard = async () => {
		const requestOptions = {
			method: "GET",
			headers: { "Content-Type": "application/json" },
		};

		let res = await fetch("http://localhost:3001/leaderboard", requestOptions);
		res = await res.json();
		setArr(res["submission"]);
	};

  useEffect(() => {
		getLeaderboard();
	}, []);

  if(arr.length===0){
    return (<></>)
  }
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
            {arr.map((val, ind) => {
              return (<>
                <tr className="names" key={val._id}>
                  <td>{ind+1}</td>
                  <td>{val.name}</td>
                  <td>{val.score}</td>
                </tr>
                <tr className="black-row"/>
              </>)
            })}
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