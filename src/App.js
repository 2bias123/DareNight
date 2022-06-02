import React, { useEffect } from 'react';
import InsertQuestion from './Components/InsertQuestion';
import LogIn from './Components/login';
import './Components/questionsPage'
import './Components/style.css'

function App() {
    return (
      <div className="App" id='main'>
        {/* <LogIn></LogIn> */}
        <InsertQuestion></InsertQuestion>

      </div>
  )
  }


export default App;
