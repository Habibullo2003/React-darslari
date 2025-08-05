import './App.css'
import { useState } from 'react'
import Title from './components/Title'
import { Fragment } from 'react'
import Modal from './components/Modal'

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
      {/* <Modal>
        <h2>Habibullo Xayrullayev github account</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, illum.</p>
      </Modal> */}
      {showModal && <Modal closeModal={closeModal}>
        <h1>Habibullo Xayrullayev github account</h1>
        <a href="https://github.com/Habibullo2003">Github</a>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
          eius totam architecto sit sapiente adipisci ea inventore dolorum?
          Ullam quod odit vero nam iusto quas, et optio quae omnis. Recusandae
          tempore obcaecati necessitatibus accusantium quo non voluptates
          blanditiis quod quas voluptatem voluptas nostrum reiciendis optio,
          repellendus, laborum fugiat possimus ad.
        </p>
      </Modal>}
      <br />
      <br />
      <button onClick={() => {setShowModal(true)}}>Show Modal</button>
    </div>
  )
}

export default App
