import React, {useState} from 'react'
import './App.css';
import logo from './logo.svg';

function App() {

  const [counter, addNumber] = useState(0)
  
const increase = () => {
  addNumber(counter => counter + 1)
}

const decrease = () => {
  addNumber(counter => counter - 1)
}

const reset = () => {
  addNumber(counter => counter = 0)
}

  return (
    <div className="App">
      <button onClick={increase}> Add Count </button>
      <button onClick={decrease}> Decrease Count </button>
      <button onClick={reset}> Reset </button>
      <h2>{counter}</h2>
    </div>
  );
}

export default App;
