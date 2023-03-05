import './App.css';
import {Person} from './Person';

function App() {
  return (
    <div className="App">
      <Person 
        name="Rildo Franco"
        email="rildowilliam2017@gmail.com"
        age={20}
        isMarried={false}
        friends={["8", "FCT Eng. Inf", "Palace", "Secret"]}
      />
    </div>
  );
}

export default App;
