import { useState } from 'react'
import './App.css'
import LoginBtn from './components/LoginBtn'
import LogoutBtn from './components/LogoutBtn'

function App() {

  const[isLoggedIn, setLogged] = useState(true);

  // Early Return 
  if(!isLoggedIn) {
    return (
      <LoginBtn/>
    )
  }
  // Logical Operator 
  return (
    <div>
      <h1>Welcome Everyone To Our Website </h1>
      <div>
        {isLoggedIn && <LogoutBtn/>}
      </div>
    </div>
  )





  // terniary Operator 
  // return(
  //   <div>
  //     {isLoggedIn ? <LogoutBtn/> : <LoginBtn/> }
  //   </div>
  // )




  // ifelse method
  // if(isLoggedIn) {
  //   return (
  //     <LogoutBtn/>
  //   )
  // }
  // else{
  //   return (
  //     <LoginBtn/>
  //   )
  // }
}

export default App
