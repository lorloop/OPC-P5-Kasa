import { useParams } from 'react-router-dom'
import { advertisementList } from '../../datas/advertisementList'
import './index.scss'
import Accordion from '../../components/Accordion'

export default function Accommodation() {
  const { id } = useParams()

  const accommodation = advertisementList.filter((advertissement) => advertissement.id === id)

  return (
    <div className="accommodation">
      <div className="accommodation-header">
        <div className="header-title">
          <div className="title">
            <p>{accommodation[0].title}</p>
          </div>
          <div className="location">
            <p>{accommodation[0].location}</p>
          </div>
        </div>
        <div className="header-host">
          <div className="host-name">
            <p>{accommodation[0].host.name}</p>
          </div>
          <div className="host-picture">
            <img src={accommodation[0].host.picture} alt="host picture" />
          </div>
        </div>
      </div>
      <div className="accomodation-tags">
        <div className="pills">
          {accommodation[0].tags.map((tag) => (
            <>
              <div className="pill" key={tag}>
                <p>{tag}</p>
              </div>
            </>
          ))}
        </div>
        <div></div>
      </div>
      <div className="accommodation-accordions">
        <div>
          <Accordion title="Description" content={accommodation[0].description} />
        </div>
        <div>
          <Accordion title="Équipements" content={accommodation[0].equipments} />
        </div>
      </div>
    </div>
  )
}
