import './index.scss'

export default function Banner({text, backgroundUrl}) {
    return (
        <>
            <div className='banner'>
                
                <img className='banner-bg' src={backgroundUrl} alt="banner background" />
                <p className='banner-text'>{text}</p>
            </div>
        </>
    )
}