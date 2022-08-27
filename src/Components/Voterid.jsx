import './App.css';
import React from 'react';
import {Link} from "react-router-dom";
function Voterid(){
  return (
    <div className="main">
     <div className="sub-main">
	<div>
           <h1>Voter ID</h1>
           <div>
             <input type="text" placeholder="(Ex.ADC12345)" className="name"/>
           </div>
           <div>
             <input type="password" placeholder="password" className="name"/>
           </div>
           <div>
             <input type="password" placeholder="Enter OTP(sent to mobile)" className="name"/>
           </div>
          <div className="Submit">
          <Link to="/GoToVote"><button>Go To Vote</button></Link>
          </div>
       </div>
    </div>
    </div>
);
}
export default Voterid;