import { Link } from 'react-router-dom'
import './index.scss'

export default function Error() {
  return (
    <div className="error">
      <p className="error__code">404</p>
      <p className="error__description">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  )
}
