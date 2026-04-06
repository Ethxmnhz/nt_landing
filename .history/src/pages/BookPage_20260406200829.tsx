import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { site } from '../data/siteData'

export function BookPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    preferredDate: '',
    situation: '',
    preferredContact: 'email',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Send to email
    const mailtoLink = `mailto:${site.email}?subject=Booking Request from ${formData.fullName}&body=Name: ${formData.fullName}%0DEmail: ${formData.email}%0DPhone: ${formData.phone}%0DPreferred Date: ${formData.preferredDate}%0DPreferred Contact: ${formData.preferredContact}%0DSituation: ${formData.situation}`
    window.location.href = mailtoLink
  }

  return (
    <>
      {/* ─── PAGE HERO ─── */}
      <section className="page-hero">
        <div className="section-shell">
          <AnimatedSection>
            <p className="section-tag">Book Consultation</p>
            <h1>Begin your healing journey</h1>
            <p className="page-hero-sub">
              Fill out the form below and I'll connect with you personally to discuss your situation
              and design the right support plan for you.
            </p>
            <div className="doc-outcome-strip">
              <span>Tailored Guidance</span>
              <span>Private & Confidential</span>
              <span>Direct Practitioner Support</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── BOOKING FORM ─── */}
      <section className="section-light">
        <div className="section-shell">
          <div className="contact-form-section">
            <AnimatedSection>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name *</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="preferredDate">Preferred Date *</label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="preferredContact">Preferred Contact Method *</label>
                  <select
                    id="preferredContact"
                    name="preferredContact"
                    value={formData.preferredContact}
                    onChange={handleChange}
                    required
                  >
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                    <option value="whatsapp">WhatsApp</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="situation">Tell me about your situation *</label>
                  <textarea
                    id="situation"
                    name="situation"
                    value={formData.situation}
                    onChange={handleChange}
                    required
                    placeholder="Describe what you're going through and what brought you here..."
                    rows={6}
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit Booking Request
                  <ArrowRight size={16} style={{ marginLeft: 8 }} />
                </button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── WHAT HAPPENS AFTER ─── */}
      <section className="section-warm">
        <div className="section-shell">
          <AnimatedSection>
            <div className="section-intro centered">
              <p className="section-tag">What Happens Next</p>
              <h2>After you submit</h2>
            </div>
          </AnimatedSection>
          <div className="after-booking-grid">
            <AnimatedSection delay={0}>
              <article className="after-step">
                <span className="after-step-num">1</span>
                <h3>I Review Your Request</h3>
                <p>I personally read and understand your situation and recovery needs.</p>
              </article>
            </AnimatedSection>
            <AnimatedSection delay={120}>
              <article className="after-step">
                <span className="after-step-num">2</span>
                <h3>We Connect</h3>
                <p>
                  I reach out through your preferred method with available times and initial guidance.
                </p>
              </article>
            </AnimatedSection>
            <AnimatedSection delay={240}>
              <article className="after-step">
                <span className="after-step-num">3</span>
                <h3>Your Plan Begins</h3>
                <p>
                  Together we design a personalized healing journey tailored to your complete needs.
                </p>
              </article>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
