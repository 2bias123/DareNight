import React from 'react';
import LogIn from './Components/login';
import { questionsDatabase } from './Components/Databases/questionsDatabase';
import './Components/questionsPage'
import Questions from './Components/questionsPage';
import './Components/style.css'

function App() {
    return (
      <div className="App" id='main'>
        <LogIn></LogIn>
      </div>
  )
  }


export default App;
