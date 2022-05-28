import { questionsDatabase } from './Components/questionsDatabase';
import './Components/questionsPage'
import Questions from './Components/questionsPage';
import './Components/style.css'

function App() {
  return (
    <div className="App" id='main'>
      <Questions Data = {questionsDatabase}></Questions>
    </div>
  );
}


export default App;
