import React, { useEffect } from 'react';
import { questionsDatabase } from './Components/Databases/questionsDatabase';
import Qst from './Components/getFire';
import InsertQuestion from './Components/InsertQuestion';
import LogIn from './Components/login';
import './Components/questionsPage'
import Questions from './Components/questionsPage';
import Register from './Components/register';
import './Components/style.css'

function App() {
    return (
      <div className="App" id='main'>
        {/* <LogIn></LogIn> */}
        {/* <InsertQuestion></InsertQuestion> */}
        {/* <Questions Data={questionsDatabase}></Questions> */}
        <Register></Register>
      </div>
  )
  }

export default App;
