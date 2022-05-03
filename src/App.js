import React, {useState} from "react";
import './style/App.css';
import Wrapper from './components/wrapper';

function App() {

  const [change, setChange] = useState(0);


  return (
    <div>
    <div className="App">
      <h2 className='mainHeading'>COUNTER APPLICATION</h2><br/>
      <h3 className="heading">Enter a number from where you want to start the count</h3>
      <input onChange={(e) => { setChange(e.target.value) }} type="number" name="number" placeholder="Enter a number..." />
      
      <Wrapper startFrom={Number(change)} />
    </div>
    </div>
  );
}

export default App;
