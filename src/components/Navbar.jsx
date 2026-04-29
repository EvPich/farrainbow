import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home',      to: '/' },
  { label: 'About Us',  to: '/about' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Jmix',      to: '/jmix' },
  { label: 'Messaging', to: '/messaging' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-surface border-b border-border">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between h-[72px] px-5 lg:px-20">
        <Link to="/" className="font-inter text-[22px] font-bold text-fg-primary">
          Far Rainbow
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end
              className={({ isActive }) =>
                `font-inter text-sm transition-colors ${
                  isActive ? 'text-fg-primary font-semibold' : 'text-fg-secondary hover:text-fg-primary'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden lg:flex items-center bg-primary text-fg-inverse font-inter text-sm font-semibold px-7 py-[10px] rounded-lg hover:opacity-90 transition-opacity"
        >
          Contact Us
        </Link>

        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} className="text-fg-primary" /> : <Menu size={24} className="text-fg-primary" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-surface border-t border-border px-5 pb-5">
          {links.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block py-3 font-inter text-sm border-b border-border ${
                  isActive ? 'text-fg-primary font-semibold' : 'text-fg-secondary'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block mt-4 bg-primary text-fg-inverse font-inter text-sm font-semibold px-6 py-3 rounded-lg text-center"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  )
}
