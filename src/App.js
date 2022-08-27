import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoginPage from "./Components/LoginPage";
import Userlogin from "./Components/Userlogin";
import Voterid from "./Components/Voterid";
import Admin from "./Components/ADMIN";
import Registerdetails from "./Components/REGISTERDETAILS";
import Adminloginpage from "./Components/ADMINLOGINPAGE";
import GoToVote from "./Components/GoToVote";
import Vote1  from "./Components/Vote1";
import Vote2 from "./Components/Vote2";
function App()
{
  return(
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage/>}/>  
          <Route path='/Userlogin' element={<Userlogin/>}/>  
          <Route path='/Voterid' element={<Voterid/>} />  
          <Route path='/Admin' element={<Admin/>} />  
          <Route path='/Registerdetails' element={<Registerdetails/>} />  
          <Route path='/Adminloginpage' element={<Adminloginpage/>} /> 
          <Route path='/GoToVote' element={<GoToVote/>} />
          <Route path='/Vote1' element={<Vote1/>} />
          <Route path='/Vote2' element={<Vote2/>} />
        </Routes>
      </Router>
  );
}

export default App;