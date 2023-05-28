import React from "react";
import "./about.css";
import ME from "../../assets/home.jpg";


const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          {/* <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className="about__card">
              <FaFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div> */}
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo consequatur accusantium explicabo soluta ab est tempora labore exercitationem amet! Ab inventore dignissimos impedit, nulla aperiam saepe explicabo doloribus amet dolore assumenda minima beatae suscipit incidunt exercitationem, nam eaque at consequuntur nobis optio ex! Aliquid voluptatem laborum dolorum? Deserunt, id ipsam.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
