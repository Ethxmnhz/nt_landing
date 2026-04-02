import { Link, NavLink } from 'react-router-dom'
import { navItems, site } from '../../data/siteData'

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="announcement-bar">
        Book your consultation journey with Naturenergy.
      </div>
      <div className="header-main">
        <NavLink className="brand" to="/home" aria-label="Naturenergy Home">
          <span className="brand-mark">/</span>
          <span className="brand-text">
            <span className="brand-name">{site.name}</span>
            <span className="brand-sub">Energy Healing Practice</span>
          </span>
        </NavLink>

        <nav className="site-nav">
          {navItems.map((item) => (
            item.label === 'Retreats' ? (
              <div key={item.to} className="nav-dropdown-wrap">
                <NavLink
                  to={item.to}
                  className={({ isActive }) => (isActive ? 'site-nav-link active' : 'site-nav-link')}
                >
                  {item.label}
                </NavLink>
                <div className="nav-dropdown-panel">
                  <Link to="/programs">Learn About Our In-Person Retreats</Link>
                  <Link to="/programs">Progressive Retreats</Link>
                  <Link to="/programs">Week Long Retreats</Link>
                  <Link to="/programs">Advanced Follow Up Retreats</Link>
                </div>
              </div>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => (isActive ? 'site-nav-link active' : 'site-nav-link')}
              >
                {item.label}
              </NavLink>
            )
          ))}
        </nav>
      </div>
    </header>
  )
}
