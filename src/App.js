import React from 'react'
import Card from "./components/Card.js"
import Title from "./components/Title.js"
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
      <Title />
      {cards}
    </div>
  );
}

export default App;
