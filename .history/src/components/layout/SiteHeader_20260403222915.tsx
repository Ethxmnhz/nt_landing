import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Leaf, Menu } from 'lucide-react'
import { navItems, site } from '../../data/siteData'
import { MobileNav } from './MobileNav'

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="announcement-bar">
        <Sparkle /> Begin your healing journey — Book a free consultation today
      </div>
      <div className="header-main">
        <NavLink className="brand" to="/home" aria-label="Naturenergy Home">
          <Leaf className="brand-icon-svg" size={26} strokeWidth={2.2} />
          <span className="brand-text">
            <span className="brand-name">{site.name}</span>
            <span className="brand-sub">Energy Healing Practice</span>
          </span>
        </NavLink>

        <nav className="site-nav">
          {navItems.map((item) =>
            item.highlight ? (
              <NavLink
                key={item.to}
                to={item.to}
                className="nav-cta-btn"
              >
                {item.label}
              </NavLink>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  isActive ? 'site-nav-link active' : 'site-nav-link'
                }
              >
                {item.label}
              </NavLink>
            )
          )}
        </nav>

        <button
          className="hamburger"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          type="button"
        >
          <Menu size={26} />
        </button>
      </div>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  )
}

function Sparkle() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }}>
      <path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z" />
    </svg>
  )
}
