import './App.css'
import UserCard from "./components/UserCard"
import Virat from "./assets/virat.jpg"
import Maharana from "./assets/maharana.webp"
import Prithviraj from "./assets/prithviraj.webp"

function App() {

  return (
    <div className='container'>
      <UserCard  name="Sahil Rai" desc="Description of Sahil Rai" image={Virat} style={{"border-radius": "10px"}}/>
      <UserCard  name="Maharana Pratap" desc="Description of Mahrana Pratap" image={Maharana} style={{"border-radius": "10px"}}/>
      <UserCard name="PrithviRaj Chauhan" desc="Description of PrithviRaj Chauhan" image={Prithviraj} style={{"border-radius": "10px"}}/>
    </div>
  )
}

export default App
