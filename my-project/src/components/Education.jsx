import React from 'react'

const Education = () => {
  const education = [
    {
      title: 'DAE in CIT (Computer Information Technology)',
      institute: 'Government Polytechnic Institute',
      duration: '2023 - Present (1st Year)',
      status: 'Currently Enrolled',
      description: 'Pursuing Diploma of Associate Engineering in Computer Information Technology.'
    },
    {
      title: 'Self-Learning & Online Courses',
      institute: 'YouTube, Udemy, FreeCodeCamp',
      duration: '2022 - Present',
      status: 'Continuous Learning',
      description: 'Web Development (HTML, CSS, JavaScript, PHP), Design (Photoshop, Illustrator)'
    }
  ]

  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-timeline">
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              <h3 className="education-title">{edu.title}</h3>
              <p className="education-institute">{edu.institute}</p>
              <p className="education-duration">{edu.duration} • {edu.status}</p>
              <p className="education-description">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education