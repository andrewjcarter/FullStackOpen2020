import React, { useState } from 'react'

const ContactListForm = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addNewContact = (event) => {
    event.preventDefault()
    const newContact = {
      name: newName.trim(),
      number: newNumber.trim(),
    }

    if (newContact.name.length && newContact.number.length) {
      if (persons.some(contact => contact.name === newContact.name)) {
        window.alert(`${newContact.name} is already in the Phonebook!`)
        return
      }
      setPersons(persons.concat(newContact))
    }
  }

  const handleChangeName = (event) => {
    setNewName(event.target.value)
  }

  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h3>Add a New Contact</h3>
      <form onSubmit={addNewContact}>
        <div>
          <label>
            Name:
            <input value={newName} onChange={handleChangeName}/>
          </label>
        </div>
        <div>
          <label>
            Number:
            <input value={newNumber} onChange={handleChangeNumber}/>
          </label>
        </div> 
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

export default ContactListForm