import { useEffect, useRef, useState } from 'react'
import './index.scss'

export default function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`
    } else {
      contentRef.current.style.maxHeight = '0px'
    }
  }, [isOpen])

  return (
    <div className="accordion">
      <div className="accordion-header">
        <p>{title}</p>
        <button onClick={() => setIsOpen(!isOpen)} className={isOpen ? 'rotate' : ''}>
          <i className="fa-solid fa-chevron-down"></i>
        </button>
      </div>
      <div ref={contentRef} className={`accordion-content ${isOpen ? 'open' : 'closed'}`}>
        <p>{content}</p>
      </div>
    </div>
  )
}
