import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [showToast, setShowToast] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setShowToast(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    setTimeout(() => {
      setShowToast(false)
    }, 3000)
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span>Karachi, Pakistan</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <span>muhammadabbas0321299@gmail.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <span>0318-2322363 / 03212997059</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">💼</span>
              <span>Freelance: Available</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🔗</span>
              <a href="https://github.com/MuhammadAbbasAliRizvi" target="_blank" rel="noopener noreferrer">
                github.com/MuhammadAbbasAliRizvi
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-input"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>

        <div className={`toast ${showToast ? 'show' : ''}`}>
          Message sent successfully! I'll get back to you soon.
        </div>
      </div>
    </section>
  )
}

export default Contact