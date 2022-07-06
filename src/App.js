import React, { useState } from 'react'
import Card from "./components/Card.js"
import Navbar from "./components/Navbar.js"
import data from './data.js'
import { createContext } from 'react'
import Switch from "react-switch";
export const ThemeContext = createContext("light");

function App() {
  const cards = data.map(item => {
    return (
      <Card
      key = {item.title}
      item = {item}
      />
    )
  })
  const[theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"))
  }
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <div className = "app" id={theme}>
      <Navbar />
      <Switch onChange ={toggleTheme} checked={theme === "dark"}/>
      <div className="cards--list">
      {cards}
      </div>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
