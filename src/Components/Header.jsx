import React, { useContext } from 'react'
import "./Header.css"
import {Link} from "react-router-dom"
import Toogle from './Toogle'
import { themeContext } from '../Context/ThemeContext'
const src = "https://raw.githubusercontent.com/adarshagupta/trybookai/main/logo.png"
const Header = () => {
  const {theme} = useContext(themeContext)
  console.log(theme);
  
  return (
    <div className={`flex flex-row items-center justify-between sm:flex  ssx:max-lg:flex ssx:max-lg:flex-col ssx:max-lg:items-start ssx:max-lg:px-10 ${theme === "light" ? `text-black` : `text-white`} l`}>
      <div>
        <div className='flex flex-row items-center'>
          <div className='icon h-8 w-8 rounded-full '>
          </div>
          <div className='flex flex-row  items-center'>
            <img src={src} className='h-12 w-14' alt="" />
            <span  className='text-3xl font-bold sx:max-lg:text-1xl'>Book AI</span >
          </div>
        </div>
      </div>
      <div className='flex flex-row gap-4 text-[17px] items-center ssx:max-sm:text-sm ssx:max-sm:grid-cols-2 ssx:max-sm:grid'>
        <a href='#feature'><span className='headeritem'>Features</span ></a>
        <a href="#howitWorks"><span className='headeritem'>How It Works</span ></a>
        <a href="#Roadmap"><span className='headeritem' >Roadmap</span ></a>
        <Link to={"/payment"}><span className='headeritem'>API</span ></Link>
        <Link to={"/payment"}><span className='headeritem '>Price</span ></Link>
        <span className='headeritem'>Models</span >
        <button className={`icon px-5 py-3 text-[17px] rounded-lg ${theme === "light" ? `text-black`:`text-white`} ssx:max-md:px-2 ssx:max-md:py-2 `}>Login / Sign Up</button>
        <Toogle></Toogle>
      </div>
    </div>
  )
}

export default Header
