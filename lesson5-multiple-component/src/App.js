import './App.css'
import { useState } from 'react'
import Title from './components/Title'
import Modal from './components/Modal'
import EventList from './components/EventList'
import NewEventForm from './components/NewEventForm'

function App() {
  const [showContent, setShowContent] = useState(false)
  const [showModal, setShowModal] = useState(true)
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

  // toggle modal function

  const closeModal = () => {
    setShowModal(false)
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
      {/* <Modal>
        <h2>Habibullo Xayrullayev github account</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, illum.</p>
      </Modal> */}
      {showModal && <Modal closeModal={closeModal} isModeModal={true}>
        <NewEventForm/>
      </Modal>}
      <br />
      <br />
      <button onClick={() => {setShowModal(true)}}>New Event</button>
    </div>
  )
}

export default App
