import React from 'react';
import Skill from './Skill/Skill';
import data from './data.json';

const KeySkills = () => (
  <article id="Skills" className="text-center pt-1 pb-5">
    <div className="SectionContainer container">
      <div className="Main pt-4">

        <h4
          className={'Header col-4 offset-4 display-5 mt-0 py-1 pt-0 mb-0'
                     + ' text-center font-weight-bold'}
        >
          Key Skills
        </h4>
        <div className="Filler col-4" />

        <div className="SkillsRow row mb-5 pb-3">
          {data.map((skill) => (
            <Skill
              key={skill.name}
              icon={skill.icon}
              name={skill.name}
              description={skill.description}
            />
          ))}
        </div>

        <a
          id="ProjectsButton"
          href="#Projects"
          className={'btn btn-outline-light py-2 px-3 mt-3 mb-2 mx-2'
                     + ' d-inline-block'}
        >
          <span className="Text h3 mb-0">View Projects</span>
        </a>
        <a
          id="CvButton"
          className="btn btn-dark py-2 px-3 mt-3 mb-2 mx-2 mx-2"
          href={`${process.env.PUBLIC_URL}/Alican Demirtas CV.pdf`}
          download
        >
          <span className="Text h3 mb-0">Download CV</span>
        </a>

      </div>
    </div>
  </article>
);

export default KeySkills;
