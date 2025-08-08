import './App.css'
import { useState } from 'react'
import Title from './components/Title'
import Modal from './components/Modal'
import EventList from './components/EventList'
import NewEventForm from './components/NewEventForm'

function App() {
  const [showContent, setShowContent] = useState(false)
  const [showModal, setShowModal] = useState(true)
  const [events, setEvents] = useState([])

  const newEvent = (event) => {
    setEvents((prev) => {
      return [...prev, event]
    })
    setShowModal(false)
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

  let subtitle = 'All events well be here :)'

  return (
    <div className="App">
      <Title title="Events" subtitle={subtitle} />
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
      {showContent && <EventList events={events} handleDelete={handleDelete}/>}
      {showModal && <Modal>
        <NewEventForm newEvent={newEvent}/>
      </Modal>}
      <br />
      <br />
      <button onClick={() => {setShowModal(true)}}>New Event</button>
    </div>
  )
}

export default App
