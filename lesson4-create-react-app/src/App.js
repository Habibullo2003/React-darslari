import './App.css'
import { useState } from 'react'

function App() {
  const [name, setName] = useState('Habibullo')
  const [showContent, setShowContent] = useState(true)
  const [events, setEvents] = useState([
    { title: "Habibullo's birthday party", id: 1 },
    { title: "Doston's live stream", id: 2 },
    { title: 'match: Realmadrid vs Barselona', id: 3 },
  ])

  const handleClick = () => {
    setName('Doston')
  }

  const handleDelete = (id) => {
    // const filteredEvents = events.filter((event) => {
    //   return event.id !== id
    // })
    // setEvents(filteredEvents)

    // setEvents(events.filter((event) => {
    //   return event.id !== id
    // }))

    setEvents((prev) => {
      return prev.filter((event) => {
        return event.id !== id
      })
    })
  }

  return (
    <div className="App">
      <h1>My name is {name}</h1>
      <button onClick={handleClick}>Change name</button>
      <hr />
      <br />
      {showContent && (
        <button
          onClick={() => {
            setShowContent(false)
          }}>
          Hide Content
        </button>
      )}
      {!showContent && (
        <button
          onClick={() => {
            setShowContent(true)
          }}>
          Show Content
        </button>
      )}
      {showContent && (
        <div>
          {events.length === 0 && <h3>No Content Yet :(</h3>}
          {events.map((event) => {
            return (
              <div key={event.id}>
                <h2>{event.title}</h2>
                <button onClick={() => handleDelete(event.id)}>Delete</button>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default App
