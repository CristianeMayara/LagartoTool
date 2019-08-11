import React from "react";
import PropTypes from "prop-types";

const ContactUs = ({ resumeData }) => (
  <section id="contact">
    <div className="row section-head">
      <div className="ten columns">
        <p className="lead">
          Sinta-se à vontade para entrar em contato comigo para algum trabalho
          ou sugestão
        </p>
      </div>
    </div>
    {/* <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <h4>Linked in :
                {resumeData.linkedinId}
              </h4>
            </div>
          </aside>
        </div> */}
  </section>
);

ContactUs.propTypes = {
  resumeData: PropTypes.shape({
    linkedinId: PropTypes.string.isRequired
  }).isRequired
};

export default ContactUs;
