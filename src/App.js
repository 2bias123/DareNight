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
  



function App() {
    return (
      <div className="App" id='main'>
        {/* This defines what component to display when the diffrent links are clicked */}
        <Router>
          <Routes>
            <Route path='/' element={<Register/>}/>
            <Route path='/login' element={<LogIn/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/questionsPage' element={<Questions Data={questionsDatabase}/>}/>
          </Routes>
        </Router>
      </div>
  )
  }

export default App;
