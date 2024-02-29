import React from 'react'
import ReactDom from 'react-dom'

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}
const MODAL_STYLES = {
  position: 'fixed',
  top: '55%',
  left: '50%',
  backgroundColor: 'rgb(34, 34, 34)',
  transform: 'translate(-50%, -50%)',
  zIndex: 1010,
  width: '90%',
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'column',
  maxHeight: '90%', // Set a maximum height for the modal
};

const TOP_STYLES = {
  flex: '0 0 auto', // Fixed height for the top part
  padding: '10px',
  borderBottom: '1px solid #ccc',
};

const BOTTOM_STYLES = {
  flex: '1', // Allow the bottom part to grow
  overflowY: 'auto', // Add a scrollbar if needed
  padding: '10px',
};

export default function Modal({ children, onClose }) {

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <div style={TOP_STYLES}>
          <button className='btn bg-danger fs-4' style={{ float: "right" }} onClick={onClose}> X </button>
          {/* Add any content for the top part here */}
        </div>
        <div style={BOTTOM_STYLES}>
          {children}
        </div>
      </div>
    </>,
    document.getElementById('cart-root')
  )
}