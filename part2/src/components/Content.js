import React from 'react';
import Part from './Part';

const exerciseTotal = (parts) => {
  return parts.reduce((s, p) => s + p.exercises, 0)
}

const Content = (props) => (
  <div>
    {props.parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)}
    <strong> total of {exerciseTotal(props.parts)} exercises </strong>
  </div>
)

export default Content;