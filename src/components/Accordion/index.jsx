import { useState } from 'react'
import './index.scss'

export default function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)

  return isOpen ? (
    <>
      <div className="accordion-header">
        <p>{title}</p>
        <button onClick={() => setIsOpen(false)}>
          <i className="fa-solid fa-chevron-down"></i>
        </button>
      </div>
      <div className="accordion-content">{content}</div>
    </>
  ) : (
    <div className="accordion-header">
      <p>{title}</p>
      <button onClick={() => setIsOpen(true)}>
        <i className="fa-solid fa-chevron-down"></i>
      </button>
    </div>
  )
}
