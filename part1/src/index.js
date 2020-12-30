import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  ) 
}

const Content = (props) => {
  return (
    <div>
      { 
        props.course.parts
        .map(p => <Part key={p.name} partName={p.name} exerciseCount={p.exercises} />)
      }
    </div>
  ) 
}

const Part = (props) => {
  return (
    <p>{props.partName} {props.exerciseCount}</p>
  )
}
  
const Total = (props) => {
  const total = props.course.parts.reduce((acc, part) => acc + part.exercises, 0)
  return (
    <p>Number of exercises {total}</p>
  ) 
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      },
    ]
  } 

  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))