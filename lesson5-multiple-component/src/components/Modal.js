import './Modal.css'
import ReactDOM from 'react-dom'

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="modal-backdrop">
      <div
        className="modal"
        style={{
          border: '4px solid',
          borderColor: 'red',
          textAlign: 'center',
        }}>
        {children}
        <br />
      </div>
    </div>,
    document.body
  )
}

export default Modal
