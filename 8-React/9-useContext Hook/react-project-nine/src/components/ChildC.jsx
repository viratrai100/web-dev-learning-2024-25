import React, { useContext } from 'react'
import { UserContext } from '../App'
import { ThemeContext } from '../App'

const ChildC = () => {
    const user = useContext(UserContext);
    // -------------------------------------------------------------------------------------------------------------------------------------------------------------------
    const {theme, setTheme} = useContext(ThemeContext);
    function handleClick() {
        if(theme === 'Light')
            setTheme('dark')
        else
        setTheme('Light')
    }
  return ( 
    <div>
        <button onClick={handleClick}>
            Change Theme
        </button>
        data: {user.name}
    </div>
  )
}

export default ChildC
