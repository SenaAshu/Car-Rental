import React, { useEffect } from 'react'
import Navbar from './components/navbar/Navbar'
import { useState } from 'react'
import Hero from './components/hero/Hero';

const App = () => {

  const [theme,setTheme] = useState(
    localStorage.getItem("theme")? localStorage.getItem("theme"):"light"
  );

  const element = document.documentElement;
  useEffect(() => {
    if(theme === "dark"){
      element.classList.add("dark");
      localStorage.setItem("theme","dark");
    }
    else{
      element.classList.remove("dark")
      localStorage.setItem("theme","light")
    }
  },[theme])

  return (
    <div>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero theme={theme}/>
    </div>
  )
}

export default App
