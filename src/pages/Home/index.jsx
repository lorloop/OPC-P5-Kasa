import { advertisementList } from '../../datas/advertissmentList'
import Banner from '../../components/Banner'
import Card from '../../components/Card'
import './index.scss'
import homeBackground from '../../assets/home_banner_background.svg'

export default function Home() {
  return (
    <>
      <Banner text="Chez vous, partout et ailleurs" backgroundUrl={homeBackground} />
      <div className="card-list">
        {advertisementList.map((advertissement) => (
          <Card key={advertissement.id} advertissement={advertissement} />
        ))}
      </div>
    </>
  )
}
