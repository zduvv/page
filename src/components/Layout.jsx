import { Link, Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

function Layout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            <span className="logo-dot"></span>
            <span>tried</span>
          </Link>
          <div className="nav-links">
            <Link to="/commands">Commands</Link>
            <Link to="/status">Status</Link>
            <a href="https://docs.tried.bot" target="_blank" rel="noopener noreferrer">Docs</a>
            <Link to="/faq">FAQ</Link>
            <Link to="/" className="dashboard-link">Dashboard</Link>
          </div>
          <div className="nav-buttons">
            <a href="https://discord.gg/tried" target="_blank" rel="noopener noreferrer">
              <button className="btn-invite">Invite to Discord</button>
            </a>
            <a href="https://discord.gg/tried" target="_blank" rel="noopener noreferrer">
              <button className="btn-purchase">Purchase</button>
            </a>
          </div>
        </div>
      </nav>

      <Outlet />

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-section footer-brand">
              <div className="footer-logo">
                <span className="logo-dot"></span>
                <h3>tried</h3>
              </div>
              <p>Discord's premier all-in-one bot</p>
            </div>
            <div className="footer-section">
              <h4>Bot</h4>
              <ul>
                <li><a href="https://discord.gg/tried" target="_blank" rel="noopener noreferrer">Invite</a></li>
                <li><a href="https://docs.tried.bot" target="_blank" rel="noopener noreferrer">Documentation</a></li>
                <li><a href="https://discord.gg/tried" target="_blank" rel="noopener noreferrer">Support Server</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Legal</h4>
              <ul>
                <li><Link to="/terms">Terms of Service</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/refunds">Refund Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 tried. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
