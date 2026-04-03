import { NavLink } from 'react-router-dom'
import { X } from 'lucide-react'
import { navItems, site } from '../../data/siteData'

type MobileNavProps = {
  open: boolean
  onClose: () => void
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  return (
    <>
      <div className={`mobile-overlay ${open ? 'mobile-overlay-active' : ''}`} onClick={onClose} />
      <nav className={`mobile-drawer ${open ? 'mobile-drawer-open' : ''}`}>
        <div className="mobile-drawer-header">
          <span className="brand-name">{site.name}</span>
          <button className="mobile-close" onClick={onClose} aria-label="Close menu" type="button">
            <X size={22} />
          </button>
        </div>
        <div className="mobile-links">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `mobile-link ${isActive ? 'mobile-link-active' : ''} ${item.highlight ? 'mobile-link-cta' : ''}`
              }
              onClick={onClose}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
        <div className="mobile-drawer-footer">
          <p>{site.email}</p>
        </div>
      </nav>
    </>
  )
}
