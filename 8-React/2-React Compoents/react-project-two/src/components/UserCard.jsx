import React from 'react'
import virat from '../assets/virat.jpg'
import "./UserCard.css"


const UserCard = (props) => {
  return (
    <div className='user-container' style={props.style}>
        {/* <p id='user-title'>Virat Rai</p> */}
        <p id='user-title'>{props.name}</p>
        {/* <img id='user-img' src={virat} alt="virat"></img> */}
         <img id='user-img' src={props.image} alt="virat"></img>
        {/* <p id='user-desc'>Description of Virat Rai</p> */}
         <p id='user-desc'>{props.desc}</p>
    </div>
  )
}

export default UserCard