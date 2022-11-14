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

  // store it in state
  // initialize default value to length of array
  const [treasureLocation, setTreasureLocation] = useState(Math.floor(Math.random() * board.length))
  const [bombLocation, setBombLocation] = useState(Math.floor(Math.random() * board.length))

  // in react have to make a duplicate copy of array to update a single value in an array. Set up variable in handleGamePlay. Make complete copy of game variable in state by using spread operator.

  // get index from square component back into app.js
  const handleGamePlay = (index) => {
    // alert(index)
    // this step is super important. cannot modify single instance. whole array has to be modified
    // Makes a copy of the board in state so that we can modify a single instance.
    let updatedBoard = [...board]
    if(index === treasureLocation) {
      // this current value im clicking, i want to assign a new value to it
      // updating a single instance inside the array
      updatedBoard[index] = "💎"
      // console.log(updatedBoard)
      //setting entire updated board to state
      setBoard(updatedBoard)
    } else if (index === bombLocation) {
        // this current value im clicking, i want to assign a new value to it
        updatedBoard[index] = "💣"
        // console.log(updatedBoard)
        setBoard(updatedBoard)
    } else {
        updatedBoard[index] = "🌴"
        // console.log(updatedBoard)
        setBoard(updatedBoard)
    }
  }

  const refreshPage = () => {
    window.location.reload(false)
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
      <div>
        <button className="playAgainButton" onClick={refreshPage}>Click to play again!</button>
      </div>
    </>
  )
}

export default App
