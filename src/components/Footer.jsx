import { Link } from 'react-router-dom'

const SocialIcon = ({ path, label }) => (
  <a href="#" aria-label={label} style={{ color: 'rgba(255,255,255,0.67)' }} className="hover:opacity-100 transition-opacity">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={path} />
    </svg>
  </a>
)

export default function Footer() {
  return (
    <footer className="bg-surface-dark">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-20 pt-10 pb-8 flex flex-col gap-8">
        {/* Top */}
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <span className="font-inter text-xl font-bold text-fg-inverse">Far Rainbow</span>
            <p className="font-inter text-[13px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.67)', maxWidth: 300 }}>
              Far Rainbow S.R.L. – VAT: 03894780133<br />
              Via Turbada 11, Lecco, 23900, Italy
            </p>
            <div className="flex items-center gap-4">
              <SocialIcon label="Facebook" path="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              <SocialIcon label="LinkedIn" path="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col gap-2.5">
              <span className="font-inter text-[11px] font-semibold uppercase tracking-[2px]" style={{ color: 'rgba(255,255,255,0.4)' }}>COMPANY</span>
              {['Home', 'About Us', 'Portfolio', 'Contact'].map((l) => (
                <Link key={l} to="#" className="font-inter text-[13px] transition-opacity hover:opacity-100" style={{ color: 'rgba(255,255,255,0.67)' }}>{l}</Link>
              ))}
            </div>
            <div className="flex flex-col gap-2.5">
              <span className="font-inter text-[11px] font-semibold uppercase tracking-[2px]" style={{ color: 'rgba(255,255,255,0.4)' }}>PRODUCTS</span>
              {['Jmix', 'Messaging'].map((l) => (
                <Link key={l} to="#" className="font-inter text-[13px] transition-opacity hover:opacity-100" style={{ color: 'rgba(255,255,255,0.67)' }}>{l}</Link>
              ))}
            </div>
            <div className="flex flex-col gap-2.5">
              <span className="font-inter text-[11px] font-semibold uppercase tracking-[2px]" style={{ color: 'rgba(255,255,255,0.4)' }}>LEGAL</span>
              {['Privacy Policy', 'Cookie Policy', 'Accessibility'].map((l) => (
                <Link key={l} to="#" className="font-inter text-[13px] transition-opacity hover:opacity-100" style={{ color: 'rgba(255,255,255,0.67)' }}>{l}</Link>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.07)' }} />

        {/* Bottom */}
        <p className="font-inter text-xs" style={{ color: 'rgba(255,255,255,0.27)' }}>
          © 2026 Far Rainbow S.R.L. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
