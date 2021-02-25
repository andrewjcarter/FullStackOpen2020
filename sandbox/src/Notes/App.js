import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then((response) => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }, [])
  console.log('rendered', notes.length, 'notes')

  const addNote = (event) => {
    event.preventDefault()
    // Create a new note to save
    const addedNote = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
    }
    // Don't mutate notes directly!
    setNotes(notes.concat(addedNote));
    // Reset input textbox
    setNewNote('');
  }

  const notesToShow = showAll ? notes
    : notes.filter(note => note.important)

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notesToShow.map((note) =>
          <Note key={note.id} note={note} />
        )}
      </ul>

      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type='submit'>save</button>
      </form>
      <button onClick={() => setShowAll(state => !state)}>
        Show {showAll ? 'Important': 'All'}
      </button>
    </div>
  )
}

export default App