import './App.css';
//import React from 'react';
import {Link} from "react-router-dom";
import React,{useState} from "react";

function Registerdetails()
{
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div>
           <h1>Candidate Registration Detail Page</h1>
           <div>
             <input type="text" placeholder="Candidate Name" className="name"/>
           </div>

           <div className="second-input">
             <input type="text" placeholder="Party" className="name"/>
           </div>
           
           <div className="third-input">
             <input type="text" placeholder="Age" className="name"/>
           </div>

           {/* <div className="fourth-input">
             <input type="text" placeholder="Register no." className="name"/>
           </div> */}
          <div className="submit-button">
           <button>Register</button>
          </div>
         </div>
       </div>
     </div>
    </div>
  );
}
export default Registerdetails;