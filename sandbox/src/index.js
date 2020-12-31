import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const History = ({ allClicks }) => {
  if (allClicks.length === 0) {
    return (
      <div>This app is used by pressing the buttons</div>
    )
  }
  return (
    <>
      <div>{allClicks.join(' ')}</div>
    </>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const handleLeftClick = () => {
    setLeft(left + 1)
    setAll(allClicks.concat('L'))
  }
  const handleRightClick = () => {
    setRight(right + 1)
    setAll(allClicks.concat('R'))
  }

  return (
    <>
      {left}
      <Button handleClick={handleLeftClick} text='left' />
      <Button handleClick={handleRightClick} text='right' />
      {right}
      <History allClicks={allClicks} />
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)