import React from "react";
import PropTypes from "prop-types";

const Footer = ({ resumeData }) => (
  <footer>
    <div className="row">
      <div className="twelve columns">
        <ul className="social-links">
          {resumeData.socialLinks &&
            resumeData.socialLinks.map(item => (
              <li key={item.name}>
                <a href={item.url}>
                  <i className={item.className} />
                </a>
              </li>
            ))}
        </ul>
      </div>
      <div id="go-top">
        <a className="smoothscroll" title="Back to Top" href="#home">
          <i className="icon-up-open" />
        </a>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  resumeData: PropTypes.shape({
    socialLinks: PropTypes.array.isRequired
  }).isRequired
};

export default Footer;
