import './App.css';
import React from 'react';
import {Link} from "react-router-dom";
//import Web3 from "web3";
//import {ContractABI} from "./ContractABI";
import ReactDOM from 'react-dom';
//import React,{useState} from "react";
// const web3=new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
// web3.eth.defaultAccount = web3.eth.accounts[0];
// const RemixContract = new web3.eth.Contract(
//   ContractABI,
//   "0x32738fe4b7080fd75c0a9e2be6561d8a21975f81adbe10b1e9790d22d5415b0c"
//   );
function LorA()
{ 
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div>
           <h1>Select Login</h1>
	<div className="Button">
          <Link to="/Userlogin"><button>User</button></Link>
          <Link to="/ADMINLOGINPAGE"><button>Admin</button></Link>
          </div>
	</div>
	</div>
	</div>
	</div>
);
}
export default LorA;
