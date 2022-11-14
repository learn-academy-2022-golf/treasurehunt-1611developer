import React from "react"

const Square = (props) => {
  // console.log(props.index)

  const handleClick = () => {
    // alert(props.index)
    // invoke handleGamePlay
    // inside pass props.index
    props.handleGamePlay(props.index)
  }

  return (
    <>
    {/* import props from square value from app.js*/}
    {/* onClick invokes a function */}
      <div className="square" onClick={handleClick}>{props.value}</div>
    </>
  )
}
export default Square
