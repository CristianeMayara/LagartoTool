import React from "react";
import PropTypes from "prop-types";

const Resume = ({ resumeData }) => (
  <section id="resume">
    <div className="row skill">
      <div className="three columns header-col">
        <h1>
          <span>Skills</span>
        </h1>
      </div>

      <div className="nine columns main-col">
        {/* <p>{resumeData.skillsDescription}</p> */}

        <div className="bars">
          <ul className="skills">
            {resumeData.skills &&
              resumeData.skills.map(item => (
                <li key={item.id}>
                  <span
                    className={`bar-expand ${item.key
                      .toLowerCase()
                      .replace(/ /g, "")}`}
                  />
                  <em>{item.skillname}</em>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

Resume.propTypes = {
  resumeData: PropTypes.shape({
    skills: PropTypes.array.isRequired
  }).isRequired
};

export default Resume;
