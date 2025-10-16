import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Button from './components/Button';

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count+1);
  }

  return (
   
    <div>
      <Button handleClick={handleClick} text="click me" >
        <h1>{count}</h1>
      </Button>


      {/* <Card name="Virat Rai">
        <h1>Best WEB DEV course</h1>
        <p>Trying to be consistent in this</p>
        <p>Will complete the course soon</p>
      </Card>
      <Card>
        Hello Virat here 
      </Card>
       <Card children="Main ek children hu">  // ye children ki value print NAHI hogi 
        Hello Jee, Kaise Ho Saare  // children ki jagah sirf yahi print hoga 
      </Card>
      <Card children="Main ek children hu">  // ab ye children ki jagah print hoga
      </Card> */}
    </div>
  )
}

export default App
