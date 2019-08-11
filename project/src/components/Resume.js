import React from "react";

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
              resumeData.skills.map(item => {
                console.log(item);

                return (
                  <li>
                    <span
                      className={`bar-expand ${item.skillname
                        .toLowerCase()
                        .replace(/ /g, "")}`}
                    />
                    <em>{item.skillname}</em>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Resume;
