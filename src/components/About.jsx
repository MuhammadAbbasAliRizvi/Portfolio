import React from 'react'

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate web developer based in Karachi, Pakistan currently pursuing my DAE in CIT (1st year). 
              I specialize in front-end development with expertise in HTML5, CSS, and JavaScript.
            </p>
            <p>
              Currently expanding my knowledge in advanced JavaScript, PHP, and React.js to become a full-stack developer. 
              I also have foundational skills in Adobe Photoshop and Illustrator for design work.
            </p>
            <p>
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, 
              and creating personal projects to enhance my skills.
            </p>
          </div>
          <div className="personal-info">
            <div className="info-item">
              <span className="info-label">Name:</span>
              <span className="info-value">Muhammad Abbas</span>
            </div>
            <div className="info-item">
              <span className="info-label">Location:</span>
              <span className="info-value">Karachi, Pakistan</span>
            </div>
            <div className="info-item">
              <span className="info-label">Email:</span>
              <span className="info-value">muhammadabbas0321299@gmail.com</span>
            </div>
            <div className="info-item">
              <span className="info-label">Phone:</span>
              <span className="info-value">0318-2322363 / 03212997059</span>
            </div>
            <div className="info-item">
              <span className="info-label">Freelance:</span>
              <span className="info-value">Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About