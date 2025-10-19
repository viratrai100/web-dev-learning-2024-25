import { useState } from 'react'
import './App.css'

function App() {
// --------------------------------------------------------------------------------------
  // function handleClick() {
  //   alert("I am Clicked")
  // }
// ------------------------------------------------------------------------------------
  // function handleMouseOver() {
  //   alert("Para Ke Upar Mouse Leke Aaye Ho")
  // }

  // ---------------------------------------------------------------------------------------------------------
  // function handleInputChange() {
  //   console.log("Input me Value Change Hui hai")
  // }
  //  same
  // function handleInputChange(e) {
  //   console.log("value till now: ", e.target.value);
  // }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   i am writing my custom behaviour down
  //   alert("Form submit kar du kya")
  // }
  // ----------------------------------------------------------------------------------------------------------------------------------------


  function handleClick() {
    alert("Ye Dusra Method Hai, ye bhi sahi hai")
  }

  // ------------------------------------------------------------------------------------------------------------------



  return (
    <div>


      {/* //imediate invoction method --- XXXXXX  */}
      {/* <button onClick={alert("Ye galat Tarika hai")}>Click Me</button> */}
      {/* rightway */}
      {/* <button onClick={() => alert("Ye Hai Sahi Tarika")}>Click Me</button> */}
      {/* another right way */}
      <button onClick={handleClick}>
        Click Me
      </button>



      {/* ------------------------------------------------------------------------------------------------------------------------------- */}
      {/* <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange} />
        <button type='submit'>Submit</button>
      </form> */}



      {/* ----------------------------------------------------------------------------------- */}
      {/* <p onMouseOver={handleMouseOver} style={{border:"1px solid black"}}>
        I am a Para
      </p> */}



      {/* --------------------------------------------------------------------------------------------------------- */}
      {/* <button onClick={handleClick}>  */}
      {/* <button onClick={() => { alert("I got Clicked")}}>  */}
        {/* Click me
      </button> */}
    </div>
  )
}

export default App
