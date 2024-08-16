import { useContext } from "react"
import "./App.css"
import video from "./assets/stars.mp4"

import Header from "./Components/Header"
import Hero from "./Components/Hero"
import { themeContext } from "./Context/ThemeContext"
function App() {
  
const {theme} = useContext(themeContext)
  return (
    <>  
    <div className={`sm:px-2 md:px-10 lg:px-36 pt-8 flex flex-col gap-28 ${theme === 'light'? 'bg-white':""}`}>
    <Header></Header>
    <Hero></Hero>
    </div>
    </>
  )
}

export default App
