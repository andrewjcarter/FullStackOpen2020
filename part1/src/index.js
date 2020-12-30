import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  ) 
}
const Content = (props) => {
  return (
    <div>
      <Part partName={props.content.parts[0]} exerciseCount={props.content.exercises[0]} />
      <Part partName={props.content.parts[1]} exerciseCount={props.content.exercises[1]} />
      <Part partName={props.content.parts[2]} exerciseCount={props.content.exercises[2]} />
    </div>
  ) 
}
const Part = (props) => {
  return (
    <p>{props.partName} {props.exerciseCount}</p>
  )
}
const Total = (props) => {
  return (
    <p>Number of exercises {props.exerciseTotal}</p>
  ) 
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const content = {
    parts: [part1, part2, part3],
    exercises: [exercises1, exercises2, exercises3],
  }

  return (
    <div>
      <Header course={course} />
      <Content content={content} />
      <Total exerciseTotal={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))