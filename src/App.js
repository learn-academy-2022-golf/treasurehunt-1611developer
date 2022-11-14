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

  // in react have to make a duplicate copy of array to update a single value in an array. Set up variable in handleGamePlay. Make complete copy of game variable in state by using spread operator.

  // get index from square component back into app.js
  const handleGamePlay = (index) => {
    // alert(index)
    // this step is super important. cannot modify single instance. whole array has to be modified
    let updatedBoard = [...board]

    // this current value im clicking, i want to assign a new value to it
    updatedBoard[index] = "🌴"
    // console.log(updatedBoard)
    setBoard(updatedBoard)
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
