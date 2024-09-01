import './index.scss'
import logo from '../../assets/logo_white.svg'

export default function Footer() {
  return (
    <div className="footer">
      <div className="logo">
        <img src={logo} alt="Kasa Logo White" />
      </div>
      <div className="copyright">
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </div>
  )
}
