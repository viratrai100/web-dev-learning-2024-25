import { useMemo, useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  function expensiveTask(num) {
    console.log("Inside Expensive Task");
    for(let i=0; i<=1000000000; i++) {}
    return num*2; 
  }

  // let doubleValue = expensiveTask(4);
  // ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  // let doubleValue = expensiveTask(input); // slow 

  // we use useMemo to response faster for same number for muliple use

    // useMemo(() => first, [second])
  // first = function, and   Second = dependicies list
  let doubleValue = useMemo(() => expensiveTask(input), [input])


  // useMemo(() => first, [second])
  // first = function, and   Second = dependicies list
  

  return (
    <div>
      <button onClick={() => setCount(count +1)}>
        Incrememnt
      </button>

      <div>
      Count: {count}
      </div>

      <input
      type="number"
      placeholder='enter number'
      value={input}
      onChange={(e) => setInput(e.target.value)}
      />

      <div>
        Double: {doubleValue}
      </div>
    </div>
  )
}

export default App
