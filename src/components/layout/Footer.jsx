import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>Обращайтесь за закупкой инструментов оптом к нам</span>
        <nav className="footer-nav">
          <Link to="/admin">Админ панель</Link>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
