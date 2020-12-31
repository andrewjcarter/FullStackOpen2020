import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [counter, setCounter] = useState(0)
  const increase = () => setCounter(counter + 1)
  const reset = () => setCounter(0)
  const decrease = () => setCounter(counter - 1)
  return (
    <>
      <Display counter={counter} />
      <Button handleClick={decrease} text='-1' />
      <Button handleClick={reset} text='0' />
      <Button handleClick={increase} text='+1' />
    </>
  )
}

const Display = ({ counter }) => <div>{counter}</div>
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)