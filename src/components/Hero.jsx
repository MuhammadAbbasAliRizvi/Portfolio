import React from 'react'
import avatar from '../assets/pics/Avatar.png'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Muhammad Abbas</h1>
            <p className="hero-subtitle">
              Web Developer based in Karachi, Pakistan — DAE in CIT (1st year)
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">View Projects</a>
              <a href="#contact" className="btn btn-secondary">Contact Me</a>
            </div>
          </div>
          <div className="hero-avatar">
            <div className="avatar">
              <img 
                src={avatar} 
                alt="Muhammad Abbas - Web Developer" 
                className="avatar-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero