import React, {useState} from 'react'
import "./App.css"

function App(){


  const [count, setCount] = useState(0);



  return (
    <div className="App">
      <header>
        <h1> Counter Application </h1>
      </header>
      
      <h2>Current Value of Count is {count}</h2>
      <div className="button">
      <button onClick={() => setCount(0)}  >Reset Counter</button>
      <button onClick={() =>setCount(count+1)}  >Increase the Counter</button>
      <button onClick={() => setCount(count-1)} >Decrease counter</button>
      </div>
    </div>
  )
}

export default App;