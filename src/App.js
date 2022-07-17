import React, { useEffect, useState } from 'react';
import { questionsDatabase } from './Components/Databases/questionsDatabase';
import Qst from './Components/getFire';
import InsertQuestion from './Components/InsertQuestion';
import LogIn from './Components/login';
import './Components/questionsPage'
import Questions from './Components/questionsPage';
import './Components/style.css'
import Register from './Components/register';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import AdminPage from './Components/adminPage';
  



function App() {
    return (
      <div className="App " id='main'>

        {/* This defines what component to display when the diffrent links are clicked */}
        <Router>
          <Routes>
            <Route path='/' element={<AdminPage/>}/>
            <Route path='/login' element={<LogIn/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/questionsPage' element={<Questions Data={Qst('Questions')}/>}/>
            <Route path='/insertquestion' element={<InsertQuestion/>}/>
          </Routes>
        </Router>
      </div>
  )
  }

export default App;
