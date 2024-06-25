import { Link } from 'react-router-dom'
import './index.scss'

export default function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img src="src/assets/logo.svg" alt="Kasa Logo" />
      </div>
      <nav className="header__nav">
        <Link to="/">Accueil</Link>
        <Link to="/about">A Propos</Link>
      </nav>
    </div>
  )
}
