import React, { useState } from 'react'
import ContactList from './components/ContactList'
import ContactListForm from './components/ContactListForm'
import ContactSearch from './components/ContactSearch'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  return (
    <div>
      <h2>Phonebook</h2>
      <ContactSearch persons={persons} />
      <ContactListForm persons={persons} setPersons={setPersons} />
      <ContactList persons={persons}/>
    </div>
  )
}

export default App

