import './App.css';
import React from 'react';
import {Link} from "react-router-dom";
function App()
{
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div>
           <h1>Login Page</h1>
           <div>
             <input type="text" placeholder="user name" className="name"/>
           </div>
           <div className="second-input">
             <input type="password" placeholder="password" className="name"/>
           </div>
           <div className="third-input">
             <input type="password" placeholder="conform password" className="name"/>
           </div>
          <div className="login-button">
          <Link to="/Voterid"><button>Login</button></Link>
          </div>
           
            <p className="link">
              <a href="#">Forgot password ?</a>
            </p>
           
 
         </div>
       </div>
     </div>
    </div>
  );
}
export default App;




