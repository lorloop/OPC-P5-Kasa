import { useNavigate, useParams } from 'react-router-dom'
import { advertisementList } from '../../datas/advertissmentList.js'
import './index.scss'
import Accordion from '../../components/Accordion'
import { useEffect, useState } from 'react'

export default function Accommodation() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [imgId, setImgId] = useState(0)

  // Trouver le logement correspondant
  const accommodation = advertisementList.find((advertissement) => advertissement.id === id)

  // Si le logement n'existe pas, rediriger vers la page 404
  useEffect(() => {
    if (!accommodation) {
      navigate('/404')
    }
  }, [accommodation, navigate])

  const [src, setSrc] = useState(accommodation ? accommodation.pictures[imgId] : '')

  useEffect(() => {
    if (accommodation) {
      setSrc(accommodation.pictures[imgId])
    }
  }, [imgId, accommodation])

  if (!accommodation) {
    return null
  }

  function changeImage(direction) {
    const lastImg = accommodation.pictures.length - 1
    if (direction === 'back') {
      if (imgId === 0) {
        setImgId(lastImg)
      } else {
        setImgId(imgId - 1)
      }
    }

    if (direction === 'next') {
      if (imgId === lastImg) {
        setImgId(0)
      } else {
        setImgId(imgId + 1)
      }
    }
  }

  function setStars(rating) {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<i key={i} className="fa-solid fa-star active"></i>)
      } else {
        stars.push(<i key={i} className="fa-solid fa-star"></i>)
      }
    }
    return stars
  }

  function setEquipments(equipments) {
    return equipments.map((equipment) => <p key={equipment}>{equipment}</p>)
  }

  return (
    <div className="accommodation">
      <div className="slideshow">
        <img className="slideshow-img" src={src} alt={accommodation.title} />
        <div>
          {accommodation.pictures.length === 1 ? (
            ''
          ) : (
            <>
              <div className="slideshow-arrows">
                <button className="slideshow-back-arrow" onClick={() => changeImage('back')}>
                  <i className="fa-solid fa-chevron-down"></i>
                </button>
                <button className="slideshow-next-arrow" onClick={() => changeImage('next')}>
                  <i className="fa-solid fa-chevron-down"></i>
                </button>
              </div>
              <div className="slideshow-indicator">
                <p>
                  {imgId + 1}/{accommodation.pictures.length}
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="accommodation-header">
        <div className="accommodation-header-left">
          <div className="header-title">
            <div className="title">
              <p>{accommodation.title}</p>
            </div>
            <div className="location">
              <p>{accommodation.location}</p>
            </div>
          </div>
          <div className="pills">
            {accommodation.tags.map((tag) => (
              <div className="pill" key={tag}>
                <p>{tag}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="accomodation-header-right">
          <div className="header-host">
            <div className="host-name">
              <p>{accommodation.host.name}</p>
            </div>
            <div className="host-picture">
              <img src={accommodation.host.picture} alt="host picture" />
            </div>
          </div>
          <div className="stars">{setStars(accommodation.rating)}</div>
        </div>
      </div>
      <div className="accommodation-accordions">
        <div className="accordion">
          <Accordion title="Description" content={accommodation.description} />
        </div>
        <div className="accordion">
          <Accordion title="Équipements" content={setEquipments(accommodation.equipments)} />
        </div>
      </div>
    </div>
  )
}
