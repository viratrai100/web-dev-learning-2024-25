import { useEffect, useState } from 'react'
import './App.css'
import LoggerComponent from './components/LoggerComponent'
import TimerComponent from './components/TimerComponent'
import DataFetcher from './components/DataFetcher'
import ResizeComponent from './components/ResizeComponent'
import MultiEffectComponent from './components/MultiEffectComponent'

function App() {

  // const [count, setCount] = useState(0);
  // const [total, setTotal] = useState(1);

  //first -> side-effect function
  //second -> clean-up function
  //third -> comma separated dep list

  //variation: 1
  // runs on every render 
  // const [count, setCount] = useState(0);
  // useEffect(()=>{
  //   alert("I will run on each render");
  // })  

  // function handleClick(){
  //   setCount(count+1);
  // }


// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //variation: 2
  //thata runs on onl first render
  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   alert("I will run on only first render")
  // }, [])

  // function handleClick(){
  //     setCount(count+1);
  //   }

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------    
    //variation: 3
  //   const [count, setCount] = useState(0);
  //   useEffect(()=> {
  //     alert("I will run every time when count is update")
  //   }, [count])


  // function handleClick(){
  //   setCount(count+1);
  // }
  


  // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //variation: 4
  //multiple dependencies
  // const [count, setCount] = useState(0);
  // const [total, setTotal] = useState(1);
  // useEffect(() => {
  //   alert("I will run every time when count/total is update")
  // }, [count, total])


  // function handleClick(){
  //     setCount(count+1);
  //   }
  //   function handleClickTotal() {
  //     setTotal(total+1);
  //   }

      // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      //variation: 5
      //iss baar let's  add a cleanup function
    //     const [count, setCount] = useState(0);
    //     const [total, setTotal] = useState(1);
    //   useEffect(() => {
    //     alert("Count is updated")
      
    //     return () => {
    //       alert("count is unmounted form UI");
    //     }
    //   }, [count])

    //     function handleClick(){
    //   setCount(count+1);
    // }
    // function handleClickTotal() {
    //   setTotal(total+1);
    // }
      
  
  return (
    <div>

      <LoggerComponent />
      <TimerComponent />
      <DataFetcher />
      <ResizeComponent />
      <MultiEffectComponent />




      {/* <button onClick={handleClick}>
        Click Me
      </button>
      <br/>
      Count is: {count}  */}
       {/* hello bhai */}
      {/* ---------------------------------------------------------------------------------------------------- */}
      {/* for multiple  */}
      {/* <button onClick={handleClick}>
        Update Count
      </button>
      <br />
      count is: {count}

      <br />
      <button onClick={handleClickTotal}>
        Update Total
      </button>
      <br />
      Total is: {total} */}
    </div>

  )
}

export default App

 