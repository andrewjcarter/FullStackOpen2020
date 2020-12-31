import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import 'react-tabulator/lib/styles.css';
import 'react-tabulator/lib/css/tabulator.min.css';
import { ReactTabulator } from 'react-tabulator';


const Feedback = ({ handleClick, buttons }) => {
  return (
    <div>
      <h2>Give feedback</h2>
      {
        buttons.map(button => {
          return (
            <button key={button.label} 
            onClick={handleClick(button.handler, button.value)}>
              {button.label}
            </button>
          )
        })
      }
    </div>
  )
}

const Statistics = ({ results, summary }) => {
  const resultTotal = results.reduce((acc, current) => acc + current.value, 0)
  const goodCount = results.filter(r => r.label === 'good')[0].value
  const badCount = results.filter(r => r.label === 'bad')[0].value
  let data = results

  if (summary) {
    data = results
      .concat({'label': 'all', 'value': resultTotal})
      .concat({'label': 'average', 'value': (goodCount-badCount)/resultTotal})
      .concat({'label': 'positive', 'value': `${goodCount/resultTotal*100}%`})
  }

  const tableOptions = {
    autoColumns: true,
    layout: "fitColumns",
    headerSort: false,
    selectable: false,
  }

  if (resultTotal === 0) {
    return (
      <div>No results to show.</div>
    )
  }

  return (
    <>
    <h2>Statistics</h2>
      <ReactTabulator columns={[]} data={data} options={tableOptions} />
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (handler, value) => () => {
    handler(value + 1)
  }

  const buttons = [
    {'label': 'good', 'value': good, 'handler': setGood},
    {'label': 'neutral', 'value': neutral, 'handler': setNeutral},
    {'label': 'bad', 'value': bad, 'handler': setBad},
  ];

  const results = buttons.map(result => {
    return {'label': result.label, 'value': result.value}})
  
  return (
    <div>
      <Feedback handleClick={handleClick} buttons={buttons} />
      <Statistics results={results} summary={true} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))