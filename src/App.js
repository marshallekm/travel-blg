import React from 'react'
import Card from "./components/Card.js"
import Navbar from "./components/Navbar.js"
import data from './data.js'

function App() {
  const cards = data.map(item => {
    return (
      <Card
      key = {item.title}
      item = {item}
      />
    )
  })
  return (
    <div className = "app">
      <Navbar />
      <div className="cards--list">
      {cards}
      </div>
    </div>
  );
}

export default App;
