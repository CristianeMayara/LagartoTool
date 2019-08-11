import React from "react";
import PropTypes from "prop-types";

const Header = ({ resumeData }) => (
  <header id="home">
    <nav id="nav-wrap">
      <a className="mobile-btn" href="#nav-wrap" title="Expandir menu">
        Expandir menu
      </a>
      <a className="mobile-btn" href="#" title="Esconder menu">
        Esconder menu
      </a>
      <ul id="nav" className="nav">
        <li className="current">
          <a className="smoothscroll" href="#home">
            Início
          </a>
        </li>
        <li>
          <a className="smoothscroll" href="#about">
            Sobre
          </a>
        </li>
        <li>
          <a className="smoothscroll" href="#resume">
            Skills
          </a>
        </li>
        {/* <li>
                <a className="smoothscroll" href="#portfolio">
                  Portifólio
                </a>
              </li> */}
        {/* <li>
                <a className="smoothscroll" href="#testimonials">
                  Testimonials
                </a>
              </li> */}
        <li>
          <a className="smoothscroll" href="#contact">
            Contato
          </a>
        </li>
      </ul>
    </nav>

    <div className="row banner">
      <div className="banner-text">
        <h1 className="responsive-headline">{resumeData.name}</h1>
        <h3 style={{ color: "#fff", fontFamily: "sans-serif " }}>
          {resumeData.role}.{resumeData.roleDescription}
        </h3>
        <hr />
        <ul className="social">
          {resumeData.socialLinks &&
            resumeData.socialLinks.map(item => (
              <li key={item.name}>
                <a href={item.url} target="_blank">
                  <i className={item.className} />
                </a>
              </li>
            ))}
        </ul>
      </div>
    </div>

    <p className="scrolldown">
      <a className="smoothscroll" href="#about">
        <i className="icon-down-circle" />
      </a>
    </p>
  </header>
);

Header.propTypes = {
  resumeData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    roleDescription: PropTypes.string.isRequired,
    socialLinks: PropTypes.array.isRequired
  }).isRequired
};

export default Header;
