import './NewEventForm.css'
import { useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'

function NewEventForm({newEvent}) {
  const title = useRef()
  const date = useRef()
  const location = useRef('qashqadaryo')
  const form = useRef()

  const resetInputs = () => {
    form.current.reset()
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const event = {
      title: title.current.value,
      location: location.current.value,
      date: date.current.value,
      id: uuidv4()
    }

    newEvent(event)
    resetInputs()
  }

  return (
    <form ref={form} className='new-event-form' onSubmit={handleSubmit}>
      <label>
        <span>Event Title:</span>
        <input type="text" ref={title}/>
      </label>
      <label>
        <span>Event Date:</span>
        <input type="date" ref={date}/>
      </label>
      <label>
        <span>Event Location:</span>
        <select ref={location}>
          <option value="qashqadaryo">Qashqadaryo</option>
          <option value="tashkent">Tashkent</option>
          <option value="madrid">Madrid</option>
        </select>
      </label>
      <button>Submit</button>
    </form>
  )
}

export default NewEventForm