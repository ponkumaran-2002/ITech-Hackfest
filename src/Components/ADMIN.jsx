import './App.css';
import React from 'react';
import {Link} from 'react-router-dom';
function Admin()
{
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div>
           <h1>Admin Candidate Registration Page</h1>
          <div className="login-button">
          <Link to="/REGISTERDETAILS"><button>Register Candiate</button></Link>
          </div>
          <div className="login-button2">
          <button>Switch Phase</button>
          </div>
         </div>
       </div>
     </div>
    </div>
  );
}
export default Admin;




