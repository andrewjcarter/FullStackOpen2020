import React, { useState } from 'react'

const ContactSearch = ({ persons }) => {
  const [searchName, setSearchName] = useState('')

  const handleSearch = (event) => {
    setSearchName(event.target.value)
  }
  return (
    <div>
      <div>
        <label>
          <input value={searchName} 
            placeholder='Search...' 
            onChange={handleSearch} />
        </label>
      </div>
      {
        searchName.length > 0 &&
        <div>
          Search Results: {
            persons
              .filter(
                (person) => person.name.toLowerCase().includes(searchName)
              ).map(
                (person) => <ul key={person.name}>
                  {person.name} {person.number} 
                </ul>
              )
          }
        </div>
      }
    </div>
  )
}

export default ContactSearch