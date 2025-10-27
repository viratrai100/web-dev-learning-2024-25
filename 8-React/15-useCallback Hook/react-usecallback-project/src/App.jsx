import { useCallback, useState } from 'react'
import './App.css'
import ChildComponent from './components/ChildComponent';
// import ExpensiveComponent from './components/ExpensiveComponent';

function App() {
  const [count, setCount]  = useState(0);

  //jb ek component re-render hota hai tb uske sare ke sare,
  //  function recreate hote hain -> jis se function ka reference change hot hai (A -> B).



  // function handleClick() {
  //   setCount(count+1);
    //SAVE a Function from re-render and freez the reference
   const  handleClick = useCallback(() => {
    setCount(count+1);
  // }, []);   // freez at 1 -> without dependicies
  }, [count]);
  // }

  

  return (
//  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      
    //  <div>
      // <ExpensiveComponent />
    //  </div>

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    <div>
      <div>
        Count: {count}
      </div>
      <br />
      <div>
      <button onClick={handleClick}>
        Increment
      </button>
      </div>
      <br /> <br />

      <div>
        <ChildComponent
        buttonName="Click me"
        handleClick={handleClick} />
      </div>

      {/* <ExpensiveComponent /> */}
    </div>
  )
}

export default App
