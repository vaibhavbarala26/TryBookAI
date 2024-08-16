import React, { useState , useEffect, useContext } from 'react'
import svg from "../assets/moon.svg"
import svg2 from "../assets/sun.svg"
import { themeContext } from '../Context/ThemeContext'
const Toogle = () => {
    const {theme ,toogleTheme} = useContext(themeContext)
    
  return (
    <div className=' ' >
        <div >
            <img src={theme === "light" ? svg : svg2} alt="" className={`h-7 border-2 rounded-full px-1 py-1 ${theme === 'light'? "border-black ":""}` } onClick={(toogleTheme)}  />
        </div>
    </div>
  )
}

export default Toogle
