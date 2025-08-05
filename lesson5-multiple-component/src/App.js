import './App.css'
import { useState } from 'react'
import Title from './components/Title'
import { Fragment } from 'react'

function App() {
  const [showContent, setShowContent] = useState(true)
  const [events, setEvents] = useState([
    { title: "Habibullo's birthday party", id: 1 },
    { title: "Doston's live stream", id: 2 },
    { title: 'match: Realmadrid vs Barselona', id: 3 },
  ])


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

  let subtitle = 'All events well be here :)'

  return (
    <div className="App">
      <Title title="Events" subtitle={subtitle} />
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
              <Fragment key={event.id}>
                <h2>{event.title}</h2>
                <button onClick={() => handleDelete(event.id)}>Delete</button>
              </Fragment>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default App
