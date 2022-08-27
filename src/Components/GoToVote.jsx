import './App.css';
import React from 'react';
import {Link} from "react-router-dom";
function GoToVote()
{
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div>
           <h1>Vote for your leader</h1>
	<div className="Button">
          <Link to="/Vote1"><button>ADMK</button></Link>

          <Link to="/Vote2"><button>DMK</button></Link>
          </div>
	</div>
	</div>
	</div>
	</div>
);
}
export default GoToVote;
