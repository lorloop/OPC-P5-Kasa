import { Link, useLocation } from 'react-router-dom'
import './index.scss'

export default function Header() {
  const location = useLocation()

  return (
    <div className="header">
      <div className="header__logo">
        <img src="src/assets/logo.svg" alt="Kasa Logo" />
      </div>
      <nav className="header__nav">
        <Link to="/" className={`page ${location.pathname === '/' ? 'active' : ''}`}>
          Accueil
        </Link>
        <Link to="/about" className={`page ${location.pathname === '/about' ? 'active' : ''}`}>
          A Propos
        </Link>
      </nav>
    </div>
  )
}
