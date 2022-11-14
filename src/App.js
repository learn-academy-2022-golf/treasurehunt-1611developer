import React, { useState } from "react"
import Square from './components/Square'
import "./App.css"

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])

  // get index from square component back into app.js
  const handleGamePlay = (index) => {
    alert(index)
  }

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="gameboard">
        {/* map over board */}
        {board.map((value, index) => {
          // return <Square value={value} key={index} index={index}/> make nicer below
          return (
            <Square
            value={value} key={index} index={index} handleGamePlay={handleGamePlay}
            />
          )
        })}
      </div>
    </>
  )
}

export default App
