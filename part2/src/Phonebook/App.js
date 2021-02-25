import React, { useState, useEffect } from 'react'
import ContactList from './components/ContactList'
import ContactListForm from './components/ContactListForm'
import ContactSearch from './components/ContactSearch'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then((response) => {
        setPersons(response.data)
      })
  }, [])

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

