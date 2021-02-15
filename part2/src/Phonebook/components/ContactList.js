import React from 'react'

const ContactList = ({ persons }) => {
  return (
    <div>
      <h3>Contact List</h3>
        {
          persons.map(person => 
          <ul key={person.name}>
            <li> {person.name} {person.number} </li>
          </ul>
        )}
    </div>
  )
}

export default ContactList