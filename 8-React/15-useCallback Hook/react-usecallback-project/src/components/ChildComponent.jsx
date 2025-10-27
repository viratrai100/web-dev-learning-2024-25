import React from 'react'

const ChildComponent = React.memo( 
    (props) => {

        console.log("Child Component go re-render again");
      return (
        <div>
          {/* <button> */}
          <button onClick={props.handleClick}>
            {props.buttonName}
          </button>
        </div>
      )
   }
);

export default ChildComponent

//React.memo -> wrap -> compnent -> component 
// re-render tahi hoga jab props change honge 
// nahi to re-render nahi hoga

//if u r sending a function, thrn react.memo wont be 
//able to save you from re-rendering