import React from 'react'

const Skills = () => {
  const skills = [
    { name: 'HTML5', percentage: 90, notes: 'Semantic HTML, Forms, Accessibility' },
    { name: 'CSS', percentage: 85, notes: 'Flexbox, Grid, Responsive Design' },
    { name: 'JavaScript', percentage: 75, notes: 'DOM Manipulation, ES6+' },
    { name: 'React', percentage: 75, notes: 'Front-Hand' },
    { name: 'Firebase', percentage: 90, notes: 'Auth, Firestore, Hosting,CloudStore' },
    { name: 'PHP', percentage: 35, notes: 'Basic Backend' }
  ]

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.percentage}%</span>
              </div>
              <div 
                className="skill-progress"
                role="progressbar"
                aria-valuenow={skill.percentage}
                aria-valuemin="0"
                aria-valuemax="100"
                aria-label={`${skill.name} skill level`}
              >
                <div 
                  className="skill-progress-bar" 
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
              <div className="skill-notes">{skill.notes}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills