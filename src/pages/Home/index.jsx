import { advertisementList } from '../../datas/advertisementList'
import Banner from '../../components/Banner'
import Card from '../../components/Card'
import './index.scss'

export default function Home() {
    return (
        <>  
            <Banner text='Chez vous, partout et ailleurs' backgroundUrl="/src/assets/home_banner_background.svg" />
            <div className='card-list'>
                {advertisementList.map((advertissement) => (
                    <Card key={advertissement.id} advertissement={advertissement} />
                ))}
            </div>
        </>
    )
}