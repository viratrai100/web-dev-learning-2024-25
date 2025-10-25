import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------  
  // const [count,setCount] = useState(0);
  // // let val = 1;
  // let val = useRef(0);

  // let btnRef = useRef();

  // function handleIncrement() {
  //   setCount(count+1);
  //   // val = val + 1;
  //   // console.log("value of val",val);
  //   val.current = val.current + 1;
  //   console.log("value of val:",val.current);
  // }

  // //it runs on every render
  // useEffect(() => {
  //   console.log("main firse render hogaya hu")
  // })

  // function changeColor() {
  //   btnRef.current.style.backgroundColor = "red";
  // }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------/
  const [time, setTime] = useState(0);

  let timerRef = useRef(null);

  function startTimer() {
    // setInterval(() =>{
    timerRef.current = setInterval(() => {
      setTime(time =>time+1)
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  function resetTimer() {
    stopTimer();
    setTime(0);
  }
  
  return (
    <div>

      <h1>StopWatch: {time} seconds</h1>
      <button onClick={startTimer}>
        Start
      </button>
      <br/> <br/>

      <button onClick={stopTimer}>
        Stop
      </button>
      <br/> <br/>

      <button onClick={resetTimer}>
        Reset
      </button>

      {/* // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

      {/* <button
      ref={btnRef} onClick={handleIncrement}>
        Increment
      </button>
      <br />
      <br />
      <button onClick={changeColor}>
        Change Color of 1st Button
      </button>
      <br />
      <div>
        Count: {count}
      </div> */}
      {/* // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
    </div>
  )
}

export default App
