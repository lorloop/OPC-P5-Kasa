import { Link } from 'react-router-dom'
import './index.scss'

export default function Card({ advertissement }) {
    return (
        <>
            <Link to={`/accommodation/${advertissement.id}`}>
            <div className='card'>
                <img className='card-cover' src={advertissement.cover} alt="" />
                <p className='card-title'>{advertissement.title}</p>
            </div>
            </Link>
        </>
    )
}