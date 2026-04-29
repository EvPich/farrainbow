import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Code, Smartphone, Globe, Database, Palette, Server,
  Mail, MapPin, ChevronDown, ChevronUp, Send,
} from 'lucide-react'

/* ── Data ───────────────────────────────────────────────────────────────── */

const services = [
  {
    icon: Code,
    title: 'Custom Software',
    desc: 'Tailored software solutions built to your exact specifications, from enterprise systems to innovative startups.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    desc: 'Native and cross-platform mobile applications for iOS and Android, built with Swift, Kotlin, and Flutter.',
  },
  {
    icon: Globe,
    title: 'Web Development',
    desc: 'Modern web applications using React, Angular, Vue.js, and robust backend technologies for scalable solutions.',
  },
  {
    icon: Database,
    title: 'Data & Blockchain',
    desc: 'Data engineering, analytics pipelines, and blockchain solutions for secure, transparent business operations.',
  },
  {
    icon: Palette,
    title: 'Product Design',
    desc: 'End-to-end product design from concept to launch, including UX research, prototyping, and visual design.',
  },
  {
    icon: Server,
    title: 'Database Development',
    desc: 'Database architecture, optimization, and migration services using PostgreSQL, MongoDB, and enterprise solutions.',
  },
]

const stats = [
  { value: '15+',  label: 'Years Experience' },
  { value: '200+', label: 'Projects Completed' },
  { value: '140',  label: 'Developers' },
  { value: '50+',  label: 'Global Clients' },
]

const techTabs = {
  Frontend:    ['React', 'Angular', 'Vue.js', 'TypeScript', 'Next.js', 'GraphQL', 'Redux', 'Three.js', 'HTML5 / CSS3', 'Bootstrap'],
  Backend:     ['Node.js', 'Python', 'Java', 'Go', 'PHP', 'Ruby on Rails', 'ASP.NET', 'FastAPI', 'Spring Boot', 'REST APIs'],
  Frameworks:  ['Django', 'Laravel', 'Express.js', 'NestJS', 'Nuxt.js', 'Gatsby', 'Symfony', 'Flask', 'Fiber', 'Gin'],
  DevOps:      ['Docker', 'Kubernetes', 'AWS', 'GCP', 'Azure', 'CI/CD', 'Terraform', 'Ansible', 'GitHub Actions', 'Nginx'],
  Mobile:      ['Swift', 'Kotlin', 'Flutter', 'React Native', 'Expo', 'Xcode', 'Android Studio', 'Firebase', 'AppCenter'],
  Prototyping: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Zeplin', 'Framer', 'Protopie', 'Marvel'],
}

const projects = [
  {
    img: '/images/project-smart-commune.jpg',
    title: 'Smart Commune',
    desc: 'A comprehensive digital platform for municipal services, streamlining citizen engagement and administrative workflows.',
  },
  {
    img: '/images/project-emirates.jpg',
    title: 'Emirates Sports Group',
    desc: 'Digital transformation for a leading sports organization, including fan engagement apps and management tools.',
  },
  {
    img: '/images/project-parcar.jpg',
    title: 'ParCar',
    desc: 'Smart parking solutions with real-time availability, automated payment, and IoT sensor integration.',
  },
]

const faqs = [
  {
    q: 'What development methodology do you use?',
    a: 'We follow Agile and Scrum methodologies, delivering iterative sprints with regular demos. This ensures transparency, fast feedback loops, and the flexibility to adapt to changing requirements throughout the project lifecycle.',
  },
  {
    q: 'How are your development teams composed?',
    a: 'Each project team typically includes a project manager, lead developer, frontend and backend engineers, a QA engineer, and a UX designer. Team size scales with project complexity, and we can embed directly with your existing team.',
  },
  {
    q: 'What guarantees do you offer on projects?',
    a: 'We provide a 6-month warranty on all delivered software, covering bug fixes at no additional cost. We also offer SLA-backed support packages and performance guarantees defined at project kickoff.',
  },
  {
    q: 'How is pricing and timeline determined?',
    a: "After an initial discovery call, we provide a detailed estimate based on scope, complexity, and team composition. We offer both fixed-price and time-and-material models depending on what best fits your project's needs.",
  },
  {
    q: 'Can you work with non-technical founders?',
    a: 'Absolutely. We have extensive experience translating business goals into technical roadmaps. Our project managers serve as the bridge between your vision and the development team, keeping you informed without overwhelming you with technical detail.',
  },
]

/* ── Sub-components ─────────────────────────────────────────────────────── */

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className="bg-surface rounded-lg border border-border cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between px-6 py-5">
        <span className="font-inter text-[15px] font-medium text-fg-primary pr-4">{q}</span>
        {open
          ? <ChevronUp size={20} className="text-fg-muted flex-shrink-0" />
          : <ChevronDown size={20} className="text-fg-muted flex-shrink-0" />}
      </div>
      {open && (
        <div className="px-6 pb-5">
          <p className="font-inter text-sm text-fg-secondary leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  )
}

/* ── Page ───────────────────────────────────────────────────────────────── */

export default function Home() {
  const [activeTab, setActiveTab] = useState('Frontend')
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' })
  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }))
  const handleSubmit = (e) => e.preventDefault()

  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="bg-surface-dark">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-20 py-24 flex flex-col gap-6">
          <span className="font-inter text-[13px] font-medium text-primary uppercase tracking-[3px]">
            YOUR OUTSOURCED IT DEPARTMENT
          </span>
          <h1
            className="font-inter font-bold text-fg-inverse leading-[1.1]"
            style={{ fontSize: 'clamp(38px, 5vw, 64px)', maxWidth: 800 }}
          >
            Build IT departments<br />and product teams
          </h1>
          <p
            className="font-inter text-lg leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.67)', maxWidth: 700 }}
          >
            140 developers for your projects. Custom software, mobile apps, and web solutions
            for businesses worldwide.
          </p>
          <div className="flex flex-wrap gap-4 mt-2">
            <Link
              to="/contact"
              className="bg-primary text-fg-inverse font-inter text-[15px] font-semibold px-9 py-4 rounded-lg hover:opacity-90 transition-opacity"
            >
              Contact Us
            </Link>
            <Link
              to="/portfolio"
              className="font-inter text-[15px] font-semibold text-fg-inverse px-9 py-4 rounded-lg hover:bg-white/10 transition-colors"
              style={{ border: '1px solid rgba(255,255,255,0.27)' }}
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* ── Services ───────────────────────────────────────────────────── */}
      <section className="bg-surface">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-20 py-20 flex flex-col gap-12">
          <div className="flex flex-col items-center gap-3">
            <span className="font-inter text-[13px] font-medium text-primary uppercase tracking-[3px]">
              SERVICES
            </span>
            <h2 className="font-inter text-[42px] font-bold text-fg-primary">What We Do</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-surface-alt rounded-xl p-8 flex flex-col gap-4">
                <Icon size={32} className="text-primary" />
                <h3 className="font-inter text-lg font-semibold text-fg-primary">{title}</h3>
                <p className="font-inter text-sm text-fg-secondary leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ──────────────────────────────────────────────────────── */}
      <section className="bg-surface">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-20 pb-20">
          <div className="bg-primary rounded-2xl py-12 px-16 flex flex-col sm:flex-row items-center justify-around gap-8">
            {stats.map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <span className="font-inter text-5xl font-bold text-fg-inverse">{value}</span>
                <span className="font-inter text-sm" style={{ color: 'rgba(255,255,255,0.67)' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ─────────────────────────────────────────────────── */}
      <section className="bg-surface-alt">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-20 py-20 flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-3">
            <span className="font-inter text-[13px] font-medium text-primary uppercase tracking-[3px]">
              TECHNOLOGIES
            </span>
            <h2 className="font-inter text-[42px] font-bold text-fg-primary">Our Tech Stack</h2>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {Object.keys(techTabs).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`font-inter text-[13px] font-medium px-5 py-[10px] rounded-full transition-colors ${
                  activeTab === tab
                    ? 'bg-primary text-fg-inverse'
                    : 'bg-surface text-fg-secondary border border-border hover:border-fg-secondary'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Chips */}
          <div className="flex flex-wrap justify-center gap-3" style={{ maxWidth: 900 }}>
            {techTabs[activeTab].map((chip) => (
              <span
                key={chip}
                className="bg-surface border border-border text-fg-primary font-inter text-[13px] px-[18px] py-2 rounded-full"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Portfolio ──────────────────────────────────────────────────── */}
      <section className="bg-surface">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-20 py-20 flex flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-3">
            <span className="font-inter text-[13px] font-medium text-primary uppercase tracking-[3px]">
              PORTFOLIO
            </span>
            <h2 className="font-inter text-[42px] font-bold text-fg-primary">Featured Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {projects.map(({ img, title, desc }) => (
              <div key={title} className="bg-surface rounded-xl overflow-hidden border border-border flex flex-col">
                <div className="h-[220px] bg-surface-alt overflow-hidden">
                  <img src={img} alt={title} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col gap-3 p-6">
                  <h3 className="font-inter text-xl font-semibold text-fg-primary">{title}</h3>
                  <p className="font-inter text-sm text-fg-secondary leading-relaxed">{desc}</p>
                  <Link to="/portfolio" className="font-inter text-[13px] font-semibold text-primary hover:opacity-75 transition-opacity self-start mt-1">
                    View Project →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────── */}
      <section className="bg-surface-alt">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-20 py-20 flex flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-3">
            <span className="font-inter text-[13px] font-medium text-primary uppercase tracking-[3px]">
              FAQ
            </span>
            <h2 className="font-inter text-[42px] font-bold text-fg-primary">Common Questions</h2>
          </div>
          <div className="flex flex-col gap-3 w-full" style={{ maxWidth: 800 }}>
            {faqs.map(({ q, a }) => <FAQItem key={q} q={q} a={a} />)}
          </div>
        </div>
      </section>

      {/* ── Contact ────────────────────────────────────────────────────── */}
      <section className="bg-surface-dark">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-20 py-20 flex flex-col lg:flex-row gap-20">
          {/* Left */}
          <div className="flex flex-col gap-6 flex-1">
            <span className="font-inter text-[13px] font-medium text-primary uppercase tracking-[3px]">
              CONTACT
            </span>
            <h2 className="font-inter text-[48px] font-bold text-fg-inverse leading-tight">
              Any questions?
            </h2>
            <p className="font-inter text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.67)' }}>
              We are always happy to answer your questions and help you achieve your business goals.
            </p>
            <div className="flex flex-col gap-4 mt-2">
              <a href="mailto:info@farrainbow.com" className="flex items-center gap-3 font-inter text-sm" style={{ color: 'rgba(255,255,255,0.67)' }}>
                <Mail size={18} className="text-primary flex-shrink-0" />
                info@farrainbow.com
              </a>
              <div className="flex items-center gap-3 font-inter text-sm" style={{ color: 'rgba(255,255,255,0.67)' }}>
                <MapPin size={18} className="text-primary flex-shrink-0" />
                Via Turbada 11, Lecco 23900, Italy
              </div>
            </div>
          </div>

          {/* Right – form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: 'name',    label: 'Name *',    placeholder: 'Your name',    required: true },
                { name: 'email',   label: 'Email *',   placeholder: 'your@email.com', type: 'email', required: true },
              ].map(({ name, label, placeholder, type = 'text', required }) => (
                <div key={name} className="flex flex-col gap-1.5">
                  <label className="font-inter text-xs" style={{ color: 'rgba(255,255,255,0.67)' }}>{label}</label>
                  <input
                    name={name} type={type} value={form[name]} onChange={handleChange}
                    placeholder={placeholder} required={required}
                    className="bg-transparent h-12 px-4 rounded-lg font-inter text-sm text-fg-inverse placeholder:text-fg-muted focus:outline-none focus:border-primary transition-colors"
                    style={{ border: '1px solid rgba(255,255,255,0.13)' }}
                  />
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: 'phone',   label: 'Phone',   placeholder: '+1 234 567 890' },
                { name: 'company', label: 'Company', placeholder: 'Company name' },
              ].map(({ name, label, placeholder }) => (
                <div key={name} className="flex flex-col gap-1.5">
                  <label className="font-inter text-xs" style={{ color: 'rgba(255,255,255,0.67)' }}>{label}</label>
                  <input
                    name={name} value={form[name]} onChange={handleChange}
                    placeholder={placeholder}
                    className="bg-transparent h-12 px-4 rounded-lg font-inter text-sm text-fg-inverse placeholder:text-fg-muted focus:outline-none focus:border-primary transition-colors"
                    style={{ border: '1px solid rgba(255,255,255,0.13)' }}
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-inter text-xs" style={{ color: 'rgba(255,255,255,0.67)' }}>Message *</label>
              <textarea
                name="message" value={form.message} onChange={handleChange}
                placeholder="Tell us about your project..." required
                className="bg-transparent p-4 rounded-lg font-inter text-sm text-fg-inverse placeholder:text-fg-muted focus:outline-none focus:border-primary transition-colors resize-none"
                style={{ border: '1px solid rgba(255,255,255,0.13)', height: 140 }}
              />
            </div>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-primary text-fg-inverse font-inter text-[15px] font-semibold h-[52px] rounded-lg hover:opacity-90 transition-opacity"
            >
              <Send size={16} />
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
