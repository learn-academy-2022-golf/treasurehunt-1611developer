import React from "react"

const Square = (props) => {
  return (
    <>
    {/* import props from square value from app.js*/}
      <div className="square">{props.value}</div>
    </>
  )
}
export default Square
