import './App.css';
import React from 'react';
import {Link} from 'react-router-dom';
function Adminloginpage()
{
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div>
           <h1>Admin Login Page</h1>
           <div>
             <input type="text" placeholder="Login credentials" className="name"/>
           </div>

           <div className="second-input">
             <input type="password" placeholder="password" className="name"/>
           </div>
          <div className="login-button">
          <Link to="/ADMIN"><button>Submit</button></Link>          
          </div>
         </div>
       </div>
     </div>
    </div>
  );
}
export default Adminloginpage;