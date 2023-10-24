import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function clickedIncrement() {
   setCount(count+1)
    console.log("clicked on increment", count);
  }

  function clickedDecrement () {
   setCount(count-1) 
    console.log("clicked on decrement", count);
  }
  return (
         <>
         <div>
          Value of Count: {count}
          </div>
            <button onClick={clickedIncrement}>INCREMENT</button>
            <button onClick={clickedDecrement}>DECREMENT</button>
           </>
  )
}

export default App
