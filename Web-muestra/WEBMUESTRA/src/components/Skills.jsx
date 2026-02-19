import React from 'react';

const Skills = () => {
  const skills = ['React', 'JavaScript', 'TypeScript', 'Node.js', 'Python', 'Figma'];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title fade-in">Tecnologías</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item fade-in">
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;