import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA';


// const UserContext = createContext();


//step1: create Context
//step2: wrap all the child inside a provider
//step3: create 
//step4: pass value
//step5: consumer k andar jaake consume karlo
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// const ThemeContext = createContext();

// function App() {
  // const [user, setUser] = useState({name:"Virat"});
  // --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // const [theme, setTheme] = useState('Light');
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//multiple
const UserContext = createContext();
const ThemeContext = createContext();

function App() {
  const [user, setUser] = useState({name:"Virat"});
  const [theme, setTheme] = useState('Light');

  return (
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // <ThemeContext.Provider value={theme}>
    //   <ChildA />
    // </ThemeContext.Provider>



  //   <ThemeContext.Provider value={{theme, setTheme}}>
  //     <div id="container" style={{backgroundColor:theme==='Light'?"Beige":"black"}}>
  //       <ChildA />
  //     </div>
  // </ThemeContext.Provider>

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------    
//multiple context
      <UserContext.Provider value={user}>
            <ThemeContext.Provider value={{theme, setTheme}}>
      <div id="container" style={{backgroundColor:theme==='Light'?"Beige":"black"}}>
        <ChildA />
      </div>
  </ThemeContext.Provider>
      </UserContext.Provider>
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // <>
    // <UserContext.Provider value={user}>
    //   <ChildA/>
    // </UserContext.Provider>
    // </>
  
  )
}

export default App
// export {UserContext}
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// export {ThemeContext}
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// MULTIPE
export {UserContext}
export {ThemeContext}