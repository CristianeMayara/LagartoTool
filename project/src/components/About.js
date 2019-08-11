import React from "react";
import PropTypes from "prop-types";

const About = ({ resumeData }) => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src="images/profilepic.png" alt="" />
      </div>

      <div className="nine columns main-col">
        <h2>Sobre</h2>
        <p>{resumeData.aboutme}</p>

        <div className="row">
          <div className="columns contact-details">
            <h2>Contato</h2>
            <p className="address">
              <span>{resumeData.name}</span>
              <br />
              <span>{resumeData.address}</span>
              <br />
              <span>{resumeData.website}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

About.propTypes = {
  resumeData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    aboutme: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired
  }).isRequired
};

export default About;
